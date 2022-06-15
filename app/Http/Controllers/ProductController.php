<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Specification;
use App\Models\Category;
use App\Models\Review;
use App\Models\Order;

class ProductController extends Controller
{
    public function index($product)
    {
        $Products = new Product;
        $Product_info = $Products->where('name', $product)->first();

        $Specification = new Specification;
        $Category = new Category;
        $categoryData = $Category->where('id', $Product_info->id_category)->first();
        foreach ($Specification->specs_name as $key => $data)
            if ($key === $categoryData->name)
                $specs = $data;
        $SpecsData = $Specification->where('id_product', $Product_info->id)->first();
        $returnData = [$Product_info, $specs, $SpecsData];
        return $returnData;
    }

    public function getReviews($product)
    {
        $reviewData = new Review();
        $productData = new Product();
        $productData = $productData->where('name', $product)->first();
        $reviewData = $reviewData->where('id_product', $productData->id)->get();
        foreach ($reviewData as $review) {
            $review->date = $review->created_at->format('d.m.Y');
        }
        return $reviewData;
    }

    public function checkProductAtUserOrders(Request $req, $product)
    {
        $order = new Order;
        $orderData = $order->where('user_id', $req->id)->get();
        if (empty($orderData))
            return false;
        $Products = new Product;
        $Product_info = $Products->where('name', $product)->first();

        $product_array = [];
        foreach ($orderData as $order)
            foreach (json_decode($order->products) as $product_data)
                array_push($product_array, $product_data->id);
        return (in_array($Product_info->id, $product_array));
    }

    public function deleteReview($id)
    {
        $reviewData = new Review();
        $reviewData->where('id', $id)->delete();
    }

    public function addReview(Request $req, $product)
    {
        $productData = new Product();
        $productData = $productData->where('name', $product)->first();
        $reviewData = new Review();
        $reviewData->score = $req->reviewData['score'];
        $reviewData->user_name = $req->username;
        $reviewData->text = $req->reviewData['text'];
        $reviewData->id_product = $productData->id;

        $reviewData->save();
    }
}
