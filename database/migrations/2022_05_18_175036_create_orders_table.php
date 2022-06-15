<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('first_name_buyer');
            $table->string('last_name_buyer');
            $table->string('second_name_buyer');
            $table->bigInteger('phone_buyer');
            $table->string('address_buyer');
            $table->string('email_buyer');
            $table->integer('zip_code_buyer');
            $table->string('status')->default('Ожидает отправки');
            $table->string('payment_method');
            $table->string('card_holder')->nullable();
            $table->string('card_number')->nullable();
            $table->json('products');
            $table->integer('order_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
