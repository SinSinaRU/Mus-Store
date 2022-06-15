<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'category';
    use HasFactory;

    public $brands = [
        'acoustic-guitars' => ['Gibson', 'Hohner', 'Ibanez', 'Fender',
            'Yamaha', 'Alvarez', 'Squier by Fender', 'Epiphone', 'Cort', 'Crafter'],
        'electric-guitars' => ['Gibson', 'Jackson', 'Ibanez', 'Fender',
            'Yamaha', 'Homage', 'Squier by Fender', 'Epiphone', 'Cort', 'Schecter'],
        'studio-headsets' => ['Audio-Technica', 'AKG', 'Beyerdynamic', 'Behringer',
            'Aiaiai', 'Sennheiser'],
        'drum-kits' => ['Ludwig', 'Brahner', 'Sonor', 'Tama', 'Yamaha'],
        'studio-microphone' => ['AKG', 'Audio-Technica', 'Behringer', 'Sennheiser',
            'Союз', 'Shure'],
        'acoustic-systems' => ['Behringer', 'Fender', 'Yamaha', 'JBL', 'Electro-Voice', 'Mackie', 'Audiovoice'],
        'synthesizers' => ['Yamaha', 'Casio', 'Korg', 'Medeli'],
        'guitar-amplifiers' => ['Fender', 'Ibanez', 'Marshal', 'Vox', 'Yamaha', 'Line6'],
        'strings' => ['Alice', "D'Addario", 'Gibson', 'Elixir', 'Dunlop', 'Dean Markley', 'Fender', 'Ernie Ball'],
        'guitar-accessories' => ['Alice', "Epiphone", 'Gibson', 'Dunlop', 'Fender', 'Ernie Ball']
    ];
    public $types = [
        'acoustic-guitars' => [['name' =>'6_strings', 'text' =>'6-струнные'], ['name' =>'12_strings', 'text' =>'12-струнные'], ['name' =>'left_handed', 'text' =>'Левосторонние']],
        'electric-guitars' => [['name' => '6_strings', 'text' => '6-струнные'], ['name' => '7_strings', 'text' => '7-струнные'], ['name' => '8_strings', 'text' => '8-струнные'], ['name' => 'left_handed', 'text' => 'Левосторонние']],
        'studio-headsets' => [['name' =>'dynamic_closed', 'text' => 'Динамические закрытые'], ['name' =>'closed', 'text' =>'Закрытые'], ['name' =>'opened','text' =>'Открытые'], ['name' =>'semi_opened', 'text' =>'Полуоткрытые']],
        'drum-kits' => [['name' =>'drum_kits' ,'text' => 'Ударные установки'], ['name' =>'snare_drums' ,'text' => 'Малые барабаны'], ['name' =>'toms' ,'text' => 'Томы'], ['name' =>'floor_toms' ,'text' => 'Напольные томы'], ['name' =>'bass_drums' ,'text' => 'Бас-барабаны']],
        'studio-microphone' => [['name' =>'measurement' ,'text' => 'Измерительные'], ['name' =>'hybrid' ,'text' => 'Гибридные'], ['name' =>'condenser' ,'text' => 'Конденсаторный']],
        'acoustic-systems' => [['name' =>'active' ,'text' => 'Активные'], ['name' =>'passive' ,'text' => 'Пассивные'], ['name' =>'broadcast' ,'text' => 'Трансляционные']],
        'synthesizers' => [['name' =>'basic' ,'text' => 'Базового уровня'], ['name' =>'professional' ,'text' => 'Профессиональные'], ['name' =>'for_electric_music' ,'text' => 'Для электронной музыки'], ['name' =>'arranging' ,'text' => 'Аранжировочные']],
        'guitar-amplifiers' => [['name' =>'combo_amps' ,'text' => 'Комбоусилители'], ['name' =>'pedals_and_controllers' ,'text' => 'Педали и контроллеры'], ['name' =>'guitar_cabinets' ,'text' => 'Гитарные кабинеты'], ['name' =>'head_amplifiers' ,'text' => 'Усилители головы']],
        'strings' => [['name' =>'for_acoustic' ,'text' => 'Для акустической гитары'], ['name' =>'for_electric' ,'text' => 'Для электрогитары']],
        'guitar-accessories' => [['name' =>'cases' ,'text' => 'Чехлы'], ['name' =>'straps' ,'text' => 'Ремни'], ['name' =>'sliders_and_capo' ,'text' => 'Слайдеры и каподастры'], ['name' =>'pickups' ,'text' => 'Звукосниматели'], ['name' =>'picks'  ,'text' =>'Медиаторы']]
    ];

}
