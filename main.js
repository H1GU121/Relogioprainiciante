window.onload = function() {
    const tt = document.getElementById("twitter");

    tt.addEventListener("click", () => {
        window.location.href = ('https://twitter.com'); // Insert an acc here
    });

    const yt = document.getElementById("youtube");

    yt.addEventListener("click", () => {
        window.location.href = ('https://youtube.com'); // Insert an channel here
    });

    const git = document.getElementById("github");

    git.addEventListener("click", () => {
        window.location.href = ('https://github.com/H1GU121');
    });

    function relogio() {
        const mydate = new Date 

        let time = mydate.toLocaleTimeString();
        let date = mydate.toLocaleDateString();

        const clock = document.getElementById("myClock");
        clock.textContent = date + " " + time
    }

    const l = setInterval(relogio, 1000);

    var p = l.toLocaleString();
    console.log(p);

    const hours = document.getElementById("hour")
}
