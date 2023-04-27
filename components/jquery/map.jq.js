// https://dev.origingaia.com/FrontPage_Travel

function animateReset() {

    $('.map-area').removeClass('animate_start')
    $('.TelescopicSight').removeClass('TelescopicSight-move')
    $('.RegionalBadge-name').css("opacity", "0");
    setTimeout(() => $('.map-area').addClass('animate_start'), 10)
    // clearTimeout(timeout1);
    // clearTimeout(timeout2);
    $('.RegionalBadge-icon' ).removeClass('RegionalBadge-icon-current');
    window.saveMapTimeOut.map(element => {   
        clearTimeout(element)
    });
    window.saveMapTimeOut= []
    var timeout1 = setTimeout(() => $('.Area-display-block ').css("opacity", "0"), 10000);
    var timeout2 = setTimeout(() => $('.map-pick-block ').css("opacity", "1"), 10000);
    window.saveMapTimeOut.push(timeout1,timeout2)
    
}

function travelMapMove(num) {

    const TravelMap_types = ['Della', 'Potronis', 'Nord', 'Chaoyang', 'Faline', 'Ruins']
    const $text = $('.RegionalFlag-name')
    const $text_info = $('.RegionalFlag-info')
    const TravelMap_types_info = [
        "A union consists of many tribes, their national races are mostly orcs and elves. The island has an abundant supply of tropical fruits and fisheries. Islander's lifestyles are simple and outgoing.",
        "Traders from all around the world gather at Mamba. Mamba has the most complete merchandise, even the most extensive black market conceals in its well-known desert.",
        "Located in the north of Serpent where land is barren, Nord has the problem of food shortage. Even so, the Abundance of mineral resources gives them the strength to develop powerful weapons.",
        "Chao Yang worships the snake god, they are the closest kingdom to the abyss. ",
        "Faline serves the honor, their residents also regard nobility and elite as the most highest. Compared to the disorder of the village, the luxurious palace shows the contrast between rich and poor. ",
        "An undeveloped dark area, full of mysterious power."]
    const $flag = $('.RegionalFlag-icon')
    const $landmark = $('.TravelMap-landmark-icon')
    const $TravelMap = $('.map-area')

    const current_type = TravelMap_types[num - 1]
    const current_type_info = TravelMap_types_info[num - 1]



    $TravelMap.attr('class', `map-area TravelMap-0${num}-${current_type}`)
    // $text.text(current_type)
    $text.text(current_type_info)
    $flag.attr('src', $flag.attr('src').replace(/knight_icon_0(\d)/, `knight_icon_0${num}`))
    $landmark.attr('src', $landmark.attr('src').replace(/landmark-0(\d)/, `landmark-0${num}`))
    animateReset()
}


export default function telescopicSightMove() {
    //  TravelMapAll()  
    window.saveMapTimeOut= []
    // console.log(window.saveMapTimeOut)
    $('.RegionalBadge-icon-block img').on('click', function () {
        const id = $(this).attr('id')
        const num = id.slice(id.length - 1)

        $('.Area-display-block ').css("opacity", "1")
        $('.map-pick-block ').css("opacity", "0")
        $('.Circle-Click-Icon ').css("opacity", "0")


        travelMapMove(num)
        $(this).siblings('.RegionalBadge-name').css("opacity", "1");
        $(this).addClass('RegionalBadge-icon-current');
    })
}

// function TravelMapAll() {
//     console.log('TravelMapAll')
//     let position = ''
//     $(document).ready(function () {

//         const rect = $('.map-area')[0].getBoundingClientRect()
//         //控制rect出現頁面高度 ex: (...) - 100
//         position = (rect.top - rect.height) 
//     });

//     $(window).on('scroll', init)

//     function init() {
//         console.log('NFTindexFlagReel scrollY')
//         if (window.scrollY > position) {
//             // 滑到此處雲開始移動
//             $('.TravelMap-cloud').addClass('animate_start')
//             $(window).unbind('scroll')
//         }
//     }
// }