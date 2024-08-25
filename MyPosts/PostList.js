var FolderList = [
    ["2023"],
    ["2022"],
     ];
    
var PostList = [
    ["2023/20230715/20230715.html", "July 15, 2023", "July 15, 2023 - Camping with GO PNW 2023 Summit, OR", "2023/20230715/20230715c.html", "2023"],
    ["2023/20230706/20230706.html", "July 6, 2023", "July 6, 2023 - Camping at Lassen National Park, CA", "2023/20230706/20230706c.html", "2023"],
    ["2023/20230619/20230619.html", "June 19, 2023", "June 19, 2023 - Seattle Summer Release, WA", "2023/20230619/20230619c.html", "2023"],
    ["2023/20230530/20230530.html", "May 30, 2023", "May 30, 2023 - Camping at Bruneau Dunes State Park, ID", "2023/20230530/20230530c.html", "2023"],
    ["2023/20230507/20230507.html", "May 7, 2023", "May 7, 2023 - Camping at Sol Duc Hot Spring, WA", "2023/20230507/20230507c.html", "2023"],
    ["2023/20230423/20230423.html", "April 23, 2023", "April 23, 2023 - Camping at Le Page Park, OR", "2023/20230423/20230423c.html", "2023"],
    ["2023/20230409/20230409.html", "April 9, 2023", "April 9, 2023 - Camping at Battle Ground Lake, WA", "2023/20230409/20230409c.html", "2023"],
    ["2023/20230401/20230401.html", "April 1, 2023", "April 1, 2023 - April Fool Seattle, WA", "2023/20230401/20230401c.html", "2023"],
    ["2023/20230224/20230224.html", "February 24, 2023", "February 24, 2023 - Skiing at Granby, CO", "2023/20230224/20230224c.html", "2023"],
    ["2023/20230128/20230128.html", "January 28, 2023", "January 28, 2023 - Skiing at Stevens, WA", "2023/20230128/20230128c.html", "2023"],
    ["2023/20230101/20230101.html", "January 1, 2023", "January 1, 2023 - Skiing at Lake Tahoe, NV", "2023/20230101/20230101c.html", "2023"],
    ["2022/20221224/20221224.html", "December 24, 2022", "December 24, 2022 - Christmas at San Francisco, CA", "2022/20221224/20221224c.html", "2022"],
    ["2022/20221204/20221204.html", "December 4, 2022", "December 4, 2022 - Christmas Tree at Home, WA", "2022/20221204/20221204c.html", "2022"],
    ["2022/20221124/20221124.html", "November 24, 2022", "November 24, 2022 - Thanskgiving at Home, WA", "2022/20221124/20221124c.html", "2022"],
    ["2022/20221122/20221122.html", "November 22, 2022", "November 22, 2022 - Happy Anniversary at Home, WA", "2022/20221122/20221122c.html", "2022"],
    ["2022/20221025/20221025.html", "October 25, 2022", "October 25, 2022 - Interesting News", "2022/20221025/20221025c.html", "2022"],
    ["2022/20221017/20221017.html", "October 17, 2022", "October 17, 2022 - Seattle to San Francisco", "2022/20221017/20221017c.html", "2022"],
    ["2022/20221002/20221002.html", "October 2, 2022", "October 2, 2022 - Crabbing at Westport, WA", "2022/20221002/20221002c.html", "2022"],
    ["2022/20220917/20220917.html", "September 17, 2022", "September 17, 2022 - Sand Dunes, OR", "2022/20220917/20220917c.html", "2022"],
    ["2022/20220911/20220911.html", "September 11, 2022", "September 11, 2022 - Wild Fire around home, WA", "2022/20220911/20220911c.html", "2022"],
    ["2022/20220906/20220906.html", "September 6, 2022", "September 6, 2022 - Camping at Craters of the Moon, ID", "2022/20220906/20220906c.html", "2022"],
    ["2022/20220828/20220828.html", "August 28, 2022", "August 28, 2022 - Camping at Mt. Adams, WA", "2022/20220828/20220828c.html", "2022"],
];

var middleRightTextPostList = "";
var middleRightTextPostListDetail = "";
var currentFolderName = "";

for(var j = 0; j < FolderList.length; j++) {
    currentFolderName = FolderList[j];
    middleRightTextPostList += "<br/><div><b><a href='" + rootPath + "MyPosts/" + currentFolderName + "/index.html'>" + currentFolderName + "</a></b></div>";
    middleRightTextPostListDetail += "<br/><div><b><a href='" + rootPath + "MyPosts/" + currentFolderName + "/index.html'>" + currentFolderName + "</a></b></div>";

    for(var i = 0; i < PostList.length; i++) {
        if ((PostList[i][4] == currentFolderName) && (currentFolderName == FolderName)) 
        {
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
    }
}       
var middleRightTextPostDetails = "<br/><div><b><a href='" + rootPath + "MyPosts/index.html'>My Posts</a></b></div>" + middleRightTextPostList;
