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
        Schema::create('specifications', function (Blueprint $table) {
            $table->id();
            $table->integer('id_product');
            $table->string('brand');
            $table->string('type');
            $table->string('first_spec')->nullable();
            $table->string('second_spec')->nullable();
            $table->string('third_spec')->nullable();
            $table->string('fourth_spec')->nullable();
            $table->string('fifth_spec')->nullable();
            $table->string('sixth_spec')->nullable();
            $table->string('seventh_spec')->nullable();
            $table->string('made_in');
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
        Schema::dropIfExists('specifications');
    }
};
