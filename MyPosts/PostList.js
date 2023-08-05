var PostList = [
    ["20230706/20230706.html", "July 6, 2023", "July 6, 2023 - Lassen National Park, CA", "20230706/20230706c.html"],
    ["20230619.html", "June 19, 2023", "June 19, 2023 - Seattle Summer Release, WA", "20230619chtml"],
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
