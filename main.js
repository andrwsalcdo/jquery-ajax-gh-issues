$(function() {

    const baseUrl = 'https://api.github.com/'; 
    const nuxtRepo = 'repos/nuxt/nuxt.js/issues'

    $.ajax({
      type: "GET", 
      url: baseUrl + nuxtRepo,
      success: (res) => {
        console.log(res);
        let output = ''; 
        $.each(res, (idx, issue) => {
            output += `
               <div class="issue">
                    <a href="${issue.html_url}">${issue.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')}</a>
                    <span>${issue.number}</span>
               </div>
            `; 
        })
        
        $('#issues').html(output);

      }

    });     

});