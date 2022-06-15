<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{
    protected $table = 'specifications';
    use HasFactory;

    public $specs_name = [
        'acoustic-guitars' => [['count_spec' => 'first_spec', 'name' => 'Верхняя дека'], ['count_spec' => 'second_spec', 'name' => 'Нижняя дека'], ['count_spec' => 'third_spec', 'name' => 'Обечайка'], ['count_spec' => 'fourth_spec', 'name' => 'Гриф'], ['count_spec' => 'fifth_spec', 'name' => 'Размер'], ['count_spec' => 'sixth_spec', 'name' => 'Накладка грифа, бридж'], ['count_spec' => 'seventh_spec', 'name' => 'Цвет']],
        'electric-guitars' => [['count_spec' => 'first_spec', 'name' => 'Тип конструкции'], ['count_spec' => 'second_spec', 'name' => 'Корпус'], ['count_spec' => 'third_spec', 'name' => 'Гриф'], ['count_spec' => 'fourth_spec', 'name' => 'Накладка грифа'], ['count_spec' => 'fifth_spec', 'name' => 'Бридж'], ['count_spec' => 'sixth_spec', 'name' => 'Звукосниматели'], ['count_spec' => 'seventh_spec', 'name' => 'Управление']],
        'studio-headsets' => [['count_spec' => 'first_spec', 'name' => 'Высота (в упаковке,м)'], ['count_spec' => 'second_spec', 'name' => 'Ширина (в упаковке,м)'], ['count_spec' => 'third_spec', 'name' => 'Глубина (в упаковке,м)'], ['count_spec' => 'fourth_spec', 'name' => 'Объём (в упаковке,м^2)'], ['count_spec' => 'fifth_spec', 'name' => 'Вес (в упаковке,кг)']],
        'drum-kits' => [['count_spec' => 'first_spec', 'name' => 'Высота (в упаковке,м)'], ['count_spec' => 'second_spec', 'name' => 'Ширина (в упаковке,м)'], ['count_spec' => 'third_spec', 'name' => 'Глубина (в упаковке,м)'], ['count_spec' => 'fourth_spec', 'name' => 'Объём (в упаковке,м^2)'], ['count_spec' => 'fifth_spec', 'name' => 'Вес (в упаковке,кг)']],
        'studio-microphone' => [['count_spec' => 'first_spec', 'name' => 'Высота (в упаковке,м)'], ['count_spec' => 'second_spec', 'name' => 'Ширина (в упаковке,м)'], ['count_spec' => 'third_spec', 'name' => 'Глубина (в упаковке,м)'], ['count_spec' => 'fourth_spec', 'name' => 'Объём (в упаковке,м^2)'], ['count_spec' => 'fifth_spec', 'name' => 'Вес (в упаковке,кг)']],
        'acoustic-systems' => [['count_spec' => 'first_spec', 'name' => 'Высота (в упаковке,м)'], ['count_spec' => 'second_spec', 'name' => 'Ширина (в упаковке,м)'], ['count_spec' => 'third_spec', 'name' => 'Глубина (в упаковке,м)'], ['count_spec' => 'fourth_spec', 'name' => 'Объём (в упаковке,м^2)'], ['count_spec' => 'fifth_spec', 'name' => 'НЧ динамик (дюймы)'],['count_spec' => 'sixth_spec', 'name' => 'ВЧ динамик (дюймы)'],['count_spec' => 'seventh_spec', 'name' => 'Вес (в упаковке,кг)']],
        'synthesizers' => [['count_spec' => 'first_spec', 'name' => 'Клавиатура'], ['count_spec' => 'second_spec', 'name' => 'Количество тембров'], ['count_spec' => 'third_spec', 'name' => 'Количество стилей'], ['count_spec' => 'fourth_spec', 'name' => 'Количество композиций'], ['count_spec' => 'fifth_spec', 'name' => 'Акустика'], ['count_spec' => 'sixth_spec', 'name' => 'Доп. функции'], ['count_spec' => 'seventh_spec', 'name' => 'Вес']],
        'guitar-amplifiers' => [['count_spec' => 'first_spec', 'name' => 'Мощность'], ['count_spec' => 'second_spec', 'name' => 'Динамик'], ['count_spec' => 'third_spec', 'name' => 'Вес']],
        'strings' => [['count_spec' => 'first_spec', 'name' => 'Материал'], ['count_spec' => 'second_spec', 'name' => 'Количество'], ['count_spec' => 'third_spec', 'name' => 'Калибр']],
        'guitar-accessories' => []
    ];
}
