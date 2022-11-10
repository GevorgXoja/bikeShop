function removingContent(p, i, v=0){
    const allIds = ["navigator", "women-bike"];
    const vectorImages = ["vector-0", "vector-1"];

    vectorImages.forEach((element) => {
        document.getElementById(element).classList = 'active';
    })

    document.getElementById(v).classList = 'no-active';


    let s = 0;
    allIds.forEach((element) => {
        document.getElementById(element).style.display = 'none';
        document.getElementById(s).classList = 'bike-about-chang';
        s++
    })

    document.getElementById(p).style.display = 'block';
    document.getElementById(i).classList = 'bike-about-hold';
}
