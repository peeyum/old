lanyard({
    userId: "610140494697332766",
}).then((response) => {
    const pfpElements = document.querySelectorAll(".pfp");
    pfpElements.forEach(element => {
        element.style.backgroundImage = `url(https://cdn.discordapp.com/avatars/${response.discord_user.id}/${response.discord_user.avatar}.png)`;
    });
});