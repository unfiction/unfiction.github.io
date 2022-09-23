const items = ['VTB_solicit','MOD_flyer',]

const references = {
    'VTB_solicit': ['notice_images/VTB_solicit.png', 'notice_documents/VTB_solicit.pdf'], 'MOD_flyer': ['notice_images/MOD_thumb.png', 'notice_documents/MOD_fluer.jpg'],
}

const credits = {
    'VTB_solicit': 'Vehemence Travel Bureau', 'MOD_flyer': 'twitter.com/MemoirsOfDeath',
}

function make_item(val) {
    console.log(val)
    let new_elem = '<a class="preview_item" href="'+references[val][1]+'" id="'+val+'"><span class="preview_tooltip">'+credits[val]+'</span><br><br><img id="'+val+'-main" src="'+references[val][0]+'" alt="'+val+'" class="preview_image"></img></a>'
    console.log(new_elem)
    $("#interactive_area").append(new_elem)
    $('#'+val+'-main').click(function() {
        console.log(val);
        return false;
    }).dblclick(function() {
        window.open($('#'+val).prop('href'));
        return false;
    }).contextmenu(function() {
        window.open($('#'+val).prop('href'));
        return false;
    }).mousedown(function() {
        $('#'+val).appendTo($('#interactive_area'))
    });
    $('#'+val).draggable()
    $('#'+val).css({left:Math.ceil(Math.random()*screen.width/2).toString()+'px', top:Math.ceil(Math.random()*screen.height/2).toString()+'px'})
    console.log(val)
}

for (i=0;i<items.length;i++){
    make_item(items[i])
}
