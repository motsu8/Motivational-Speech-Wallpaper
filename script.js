// ここから書いてください。
function createWallpaper(wallpaperObject){
    let container = document.createElement("div");
    container.classList.add("container", "d-flex", "justify-content-center", "py-4");

    // wallpaperDiv
    let wallpaperDiv = document.createElement("div");
    wallpaperDiv.classList.add("container", "d-flex", "vh-75", "bg-img")
    wallpaperDiv.classList.add(wallpaperObject.getVerticalPossion(),wallpaperObject.getHorizontalPossion());

    // bg-img
    wallpaperDiv.style ="background-image : url(" + wallpaperObject.imgUrl + ")";

    // text
    let wallpaperText = document.createElement("h3");
    wallpaperText.innerHTML = wallpaperObject.text;
    wallpaperText.style = "color:#" + wallpaperObject.colorCode;
    wallpaperText.classList.add("col-md-6")
    wallpaperDiv.append(wallpaperText);

    container.append(wallpaperDiv);
    return container;
}

class WallpaperObject {
    constructor(text, colorCode, imgUrl, verticalPossion, horizontalPossion){
        this.text = text;
        this.colorCode = colorCode.toUpperCase();
        this.imgUrl = imgUrl;
        this.verticalPossion = verticalPossion;
        this.horizontalPossion = horizontalPossion;
    }

    // テキストの垂直位置
    getVerticalPossion(){
        let prefix = "align-items-";
        if (this.verticalPossion == "top") return prefix + "start";
        else if (this.verticalPossion == "center") return prefix + "center";
        else return prefix + "end";
    }
    
    // テキストの水平位置
    getHorizontalPossion(){
        let prefix = "justify-content-";
        if (this.horizontalPossion == "left") return prefix + "start";
        else if (this.horizontalPossion == "center") return prefix + "center";
        else return prefix + "end";
    }
}

let domObj = document.getElementById("target");

let wallpaper1 = new WallpaperObject("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");
domObj.append(createWallpaper(wallpaper1));

let wallpaper2 = new WallpaperObject("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left");
domObj.append(createWallpaper(wallpaper2));

let wallpaper3 = new WallpaperObject("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");
domObj.append(createWallpaper(wallpaper3));
