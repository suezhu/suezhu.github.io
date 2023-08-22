var PostList = [
    ["20230715/20230715.html", "July 15, 2023", "July 15, 2023 - Camping with GO PNW 2023 Summit, OR", "20230715/20230715c.html"],
    ["20230706/20230706.html", "July 6, 2023", "July 6, 2023 - Camping at Lassen National Park, CA", "20230706/20230706c.html"],
    ["20230619/20230619.html", "June 19, 2023", "June 19, 2023 - Seattle Summer Release, WA", "20230619/20230619c.html"],
    ["20230530/20230530.html", "May 30, 2023", "May 30, 2023 - Camping at Bruneau Dunes State Park, ID", "20230530/20230530c.html"],
    ["20230507/20230507.html", "May 7, 2023", "May 7, 2023 - Camping at Sol Duc Hot Spring, WA", "20230507/20230507c.html"],
    ["20230423/20230423.html", "April 23, 2023", "April 23, 2023 - Camping at Le Page Park, OR", "20230423/20230423c.html"],
    ["20230409/20230409.html", "April 9, 2023", "April 9, 2023 - Camping at Battle Ground Lake, WA", "20230409/20230409c.html"],
    ["20230401/20230401.html", "April 1, 2023", "April 1, 2023 - April Fool Seattle, WA", "20230401/20230401c.html"],
    ["20230224/20230224.html", "February 24, 2023", "February 24, 2023 - Skiing at Granby, CO", "20230224/20230224c.html"],
    ];

var middleRightTextPostList = "";
var middleRightTextPostListDetail = "";
for(var i = 0; i < PostList.length; i++) {
    if (PostList[i][0] == PageName){
        middleRightTextPostList += "<div><b>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "'>" + PostList[i][1] + "</a>" + 
                                    "  <a href='" + rootPath + "MyPosts/" + PostList[i][3] + "'> 中文 </a></b></div>";
        middleRightTextPostListDetail += "<div><b>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "'>" + PostList[i][2] + "</a>" +
                                    "  <a href='" + rootPath + "MyPosts/" + PostList[i][3] + "'> 中文 </a></b></div>";
    }
    else {
        middleRightTextPostList += "<div>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "' style='font-size: smaller;'>" + PostList[i][1] + "</a>" +
                                    "  <a href='" + rootPath + "MyPosts/" + PostList[i][3] + "'> 中文 </a></div>";
        middleRightTextPostListDetail += "<div>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "' style='font-size: smaller;'>" + PostList[i][2] + "</a>" +
                                    "  <a href='" + rootPath + "MyPosts/" + PostList[i][3] + "'> 中文 </a></div>";
    }
}
        
var middleRightTextPostDetails = "<br/><div><b><a href='" + rootPath + "MyPosts/index.html'>My Posts</a></b></div>" + middleRightTextPostList;
