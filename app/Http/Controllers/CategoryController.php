<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use \App\Models\Specification;

class CategoryController extends Controller
{
    public function index($category)
    {
        $categories = new Category;
        $Products = new Product;
        $category_id = $categories->where('name', $category)->value('id');

        $Products = $Products->where('id_category', $category_id)->get();
        return $Products;
    }

    public function showBySubcategory(Request $req, $category)
    {
        $categories = new Category;
        $Products = new Product;
        $specs = new Specification();
        $category_id = $categories->where('name', $category)->value('id');

        if (!empty($req->brands))
            if (empty($req->types))
                $specs = $specs->whereIn('brand', $req->brands)->get();
            else
                $specs = $specs->whereIn('brand', $req->brands);
        if (!empty($req->types))
            $specs = $specs->whereIn('type', $req->types)->get();
        if ((!empty($req->types)) || (!empty($req->brands))) {
            $id_products = [];
            foreach ($specs as $spec)
                array_push($id_products, $spec->id_product);
            $Products = $Products->whereIn('id', $id_products);
        };
        if (!empty($req->available))
            if ($req->available === 'not-available')
                $Products = $Products->where('is_available', '=', 0);
            else
                $Products = $Products->where('is_available', '>', 0);

        if (!empty($req->lowestPrice))
            $Products = $Products->where('price', '>', $req->lowestPrice);

        if (!empty($req->highestPrice))
            $Products = $Products->where('price', '<', $req->highestPrice);
        if (!empty($req->sort))
            $Products = $Products->where('id_category', $category_id)->orderBy('price', $req->sort)->get();
        else
            $Products = $Products->where('id_category', $category_id)->get();
        return $Products;
    }

    public function getTitleForSubcategory($category)
    {
        $categories = new Category;
        $category_name = $categories->where('name', $category)->value('name_ru');
        return $category_name;
    }

    public function getBrandsForSubcategory($category)
    {
        $Category = new Category;
        foreach ($Category->brands as $key => $data)
            if ($key === $category)
                $brands = $data;
        return $brands;
    }

    public function getTypesForSubcategory($category)
    {
        $Category = new Category;
        foreach ($Category->types as $key => $data)
            if ($key === $category)
                $types = $data;
        return $types;
    }
}
