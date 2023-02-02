

const postBtn = document.getElementById('postBtn');
const liveFeed = document.getElementById('liveFeed');

// Create Post

postBtn.addEventListener('click', function(){
    const post_and_options_div = document.createElement('div');
    post_and_options_div.classList.add('post_and_options');

    post_and_options_div.innerText = newPost.value;
    

    const add_edit_btn = document.createElement('button');
    add_edit_btn.classList.add('feedBtns');
    add_edit_btn.innerHTML = 'Edit';

    const add_delete_btn = document.createElement('button');
    add_delete_btn.classList.add('feedBtns');
    add_delete_btn.innerHTML = 'Delete'


    liveFeed.appendChild(post_and_options_div);
    post_and_options_div.appendChild(add_edit_btn);
    post_and_options_div.appendChild(add_delete_btn);

    
    newPost.value = "";



// DELETE POST

    add_delete_btn.addEventListener('click', function (){
    liveFeed.removeChild(post_and_options_div);
})

//EDIT POST

    add_edit_btn.addEventListener('click',function (){
    add_edit_btn.innerText = 'Save';
       
    } )


    

})

