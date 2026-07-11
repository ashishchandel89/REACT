
//----------------------NavBar-upon---------------------

export const navBarFunc= () => {

    const navSectionLeft = () => {
        return [
            React.createElement("h3", { key: 1 }, "About Me"),
            React.createElement("h3", { key: 2 }, "Portfolio"),
            React.createElement("h3", { key: 3 }, "Services"),
            React.createElement("h3", { key: 4 }, "Blog"),
        ];
    };

    const navSectionRight = () => {
        return React.createElement("h3", null, "Book A Call");
    };

    const navBarLeft = () => {
        return React.createElement("div", { className: "navBarLeft" }, navSectionLeft());
    };

    const navBarRight = () => {
        return React.createElement("div", { className: "navBarRight" }, navSectionRight());
    };

    const navBar = () => {
        return React.createElement("div",{ className: "navBar" },navBarLeft(),navBarRight());
    };

    return navBar();  
};




//----------------------------Increment------------------------


export const achievementFunc=()=>{


    const incrementLeft = () => {
        return [
            React.createElement("h2", { key: 1 }, "+200"),
            React.createElement("h4", { key: 2 }, "Project Completed"),
        ]
    }

    const incrementRight = () => {
       return [
            React.createElement("h2", { key: 1 }, "+50"),
            React.createElement("h4", { key: 2 }, "Startup raised"),
        ]

    };

    const achievementLeft = () => {
        return React.createElement("div", { className: "incrementLeft" }, incrementLeft());
    };

    const achievementRight = () => {
        return React.createElement("div", { className: "incrementRight " }, incrementRight());
    };
     const achievement = () => {
        return React.createElement("div",{ className: "increment" },achievementLeft(),achievementRight());
    };
    return achievement();
}


//--------------------------Hello-----------------------------


export const HelloFunc=()=>{
    const Hello=()=>{
        return [
            React.createElement('h1',{key:1},'Jack'),
            React.createElement('h4',{key:2},"--It's D.Nova a design wizerd")
        ]
    }
    const HelloDiv=()=>{
        return React.createElement('div',{className:'helloDiv'},Hello())
    }
    return HelloDiv()
}


//-------------------------Img-------------------------------


export const ImgFunc=()=>{
    const realImg=()=>{
        return React.createElement('img',{src:'https://i.pinimg.com/736x/41/bf/9a/41bf9a7e377b22c9cc943eb61ce925ba.jpg'})
    }
    const imgDiv=()=>{
        return React.createElement('div',{className:'imgDiv'},realImg())
    }
    return imgDiv()
}


//------------------------Hello and Img div-----------------

export const HelloImgDiv=()=>{
    return React.createElement('div',{className:'helloimgDiv'},HelloFunc(),ImgFunc())
}