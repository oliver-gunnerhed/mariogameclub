let title = document.getElementById("content-title");
let content = document.getElementById("content");
let användid = "club"


function display_content(id) {

    switch (id) {
        case "club":
            document.getElementById(id).classList.add("join")
            document.getElementById(användid).classList.remove("join")

            title.innerText = "It's a me, Mario"
            content.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit nulla quia velit nisi laudantium ul lam enim, magni. Reiciendis reprehendderit nemo corrupti eligendi fugiat ab blanditiis incidunt rem porro, odio esse obcaecati? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos in odio atque vero cum temporibus ex, corrupti facilis architecto nemo perspiciatis nostrum? Quae minus aliquam hic laboriosam architecto! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed molestias perspiciatis deleniti earum, reiciendis illo voluptates! Maxime, sint minus iste perspiciatis, ea aperiam natus ex vitae recusandae officiis, harum dicta?"
            användid = "club"
            break
        case "news":
            document.getElementById(id).classList.add("join")
            document.getElementById(användid).classList.remove("join")

            title.innerText = "Latest news"
            content.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consequatur rerum ducimus vitae dolore. Aspernatur quibusdam ipsa corporis iste. Praesentium necessitatibus a aut cum nostrum porro sequi tenetur numquam nulla!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam blanditiis ab magni! Itaque placeat accusantium dolore, laboriosam molestias tempora? Consectetur odio aliquam iure rerum deserunt, quaerat officiis tenetur omnis debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur, eveniet voluptas facere dolores quia? Rem dolores, eveniet fugit, itaque fugiat quaerat temporibus ipsum, tempore aliquam voluptatum quae provident quis!"
            användid = "news"
            break
        case "games":
            document.getElementById(id).classList.add("join")
            document.getElementById(användid).classList.remove("join")

            title.innerText = "New games";
            content.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur eius voluptates nesciunt fugit. Atque, voluptas porro. Ipsum impedit suscipit amet tempora hic nihil sed necessitatibus laudantium, atque blanditiis. Dolores! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident repellat dolorum voluptate eaque ducimus cum similique nisi, dolorem itaque aliquam sint eveniet quod aspernatur molestiae ipsam ipsa, odit dignissimos voluptatum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sapiente consequuntur numquam quaerat dicta odio, modi iste nisi nemo cum dignissimos quae voluptatibus ex quisquam adipisci alias. Velit, qui suscipit."
            användid = "games"
            break
        case "contact":
            document.getElementById(id).classList.add("join")
            document.getElementById(användid).classList.remove("join")
            
            title.innerText = "Contact"
            content.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum. Repellat, nisi exercitationem. Voluptatibus deserunt esse odit corrupti explicabo at unde alias voluptatem ea, harum fugit illo commodi neque cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laudantium distinctio. Perspiciatis, animi esse magnam rerum facere id commodi maiores. Impedit, rem quis ut laboriosam quod architecto asperiores eveniet libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, deserunt atque harum neque ut eius? Provident voluptatibus aliquam ipsa eum et esse repellat, optio quia eligendi corrupti minus nihil laudantium."
            användid = "contact"
            break
    }
}