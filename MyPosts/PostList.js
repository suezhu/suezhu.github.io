var FolderList = [
    ["2023"],
    ["2022"],
    ["2021"],
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
    ["2022/20220729/20220729.html", "July 29, 2022", "July 29, 2022 - Home, WA", "2022/20220729/20220729c.html", "2022"],
    ["2022/20220721/20220721.html", "July 21, 2022", "July 21, 2022 - Drake Peak Lookout, WA", "2022/20220721/20220721c.html", "2022"],
    ["2022/20220708/20220708.html", "July 8, 2022", "July 8, 2022 - Glacier National Park, MT", "2022/20220708/20220708c.html", "2022"],
    ["2022/20220619/20220619.html", "June 19, 2022", "June 19, 2022 - Home, WA", "2022/20220619/20220619c.html", "2022"],
    ["2022/20220605/20220605.html", "June 5, 2022", "June 5, 2022 - Port Angeles, WA", "2022/20220605/20220605c.html", "2022"],
    ["2022/20220530/20220530.html", "May 30, 2022", "May 30, 2022 - Mt. Baker-Snoqualmie National Forest, WA", "2022/20220530/20220530c.html", "2022"],
    ["2022/20220523/20220523.html", "May 23, 2022", "May 23, 2022 - Home, WA", "2022/20220523/20220523c.html", "2022"],
    ["2022/20220515/20220515.html", "May 15, 2022", "May 15, 2022 - Home, WA", "2022/20220515/20220515c.html", "2022"],
    ["2022/20220511/20220511.html", "May 11, 2022", "May 11, 2022 - Home, WA", "2022/20220511/20220511c.html", "2022"],
    ["2022/20220501/20220501.html", "May 1, 2022", "May 1, 2022 - Deception Pass, WA", "2022/20220501/20220501c.html", "2022"],
    ["2022/20220410/20220410.html", "April 10, 2022", "April 10, 2022 - Prineville and Painted Hills, OR", "2022/20220410/20220410c.html", "2022"],   
    ["2022/20220405/20220405.html", "April 5, 2022", "April 5, 2022 - Homw, WA", "2022/20220405/20220405c.html", "2022"],   
    ["2022/20220401/20220401.html", "April 1, 2022", "April 1, 2022 - Homw, WA", "2022/20220401/20220401c.html", "2022"],  
    ["2022/20220327/20220327.html", "March 27, 2022", "March 27, 2022 - Leavenworth, WA", "2022/20220327/20220327c.html", "2022"],     
    ["2022/20220312/20220312.html", "March 12, 2022", "March 12, 2022 - Home, WA", "2022/20220312/20220312c.html", "2022"],  
    ["2022/20220305/20220305.html", "March 5, 2022", "March 5, 2022 - South WA", "2022/20220305/20220305c.html", "2022"], 
    ["2022/20220221/20220221.html", "February 21, 2022", "February 21, 2022 - North WA", "2022/20220221/20220221c.html", "2022"],  
    ["2022/20220212/20220212.html", "February 12, 2022", "February 12, 2022 - Leavenworth, WA", "2022/20220212/20220212c.html", "2022"],     
    ["2022/20220131/20220131.html", "January 31, 2022", "January 31, 2022 - Home, WA", "2022/20220131/20220131c.html", "2022"], 
    ["2022/20220118/20220118.html", "January 18, 2022", "January 18, 2022 - Clear Lake, CA", "2022/20220118/20220118c.html", "2022"], 
    ["2022/20220107/20220107.html", "January 7, 2022", "January 7, 2022 - Home, WA", "2022/20220107/20220107c.html", "2022"], 
    ["2022/20220101/20220101.html", "January 1, 2022", "January 1, 2022 - Home, WA", "2022/20220101/20220101c.html", "2022"], 
    ["2021/20211230/20211230.html", "December 30, 2021", "December 30, 2021 - Silver Mountain, ID", "2021/20211230/20211230c.html", "2021"], 
    ["2021/20211225/20211225.html", "December 25, 2021", "December 25, 2021 - Home, WA", "2021/20211225/20211225c.html", "2021"], 
    ["2021/20211219/20211219.html", "December 19, 2021", "December 19, 2021 - Water Falls near Columbia River, OR", "2021/20211219/20211219c.html", "2021"],
    ["2021/20211209/20211209.html", "December 9, 2021", "December 9, 2021 - Home, WA", "2021/20211209/20211209c.html", "2021"],
    ["2021/20211205/20211205.html", "December 5, 2021", "December 5, 2021 - Home, WA", "2021/20211205/20211205c.html", "2021"],
    ["2021/20211127/20211127.html", "November 27, 2021", "November 27, 2021 - Home, WA", "2021/20211127/20211127c.html", "2021"],
    ["2021/20211125/20211125.html", "November 25, 2021", "November 25, 2021 - Home, WA", "2021/20211125/20211125c.html", "2021"],
    ["2021/20211113/20211113.html", "November 13, 2021", "November 13, 2021 - Shelton, WA", "2021/20211113/20211113c.html", "2021"],
    ["2021/20211112/20211112.html", "November 12, 2021", "November 12, 2021 - Home, WA", "2021/20211112/20211112c.html", "2021"],
    ["2021/20211031/20211031.html", "October 31, 2021", "October 31, 2021 - North WA", "2021/20211031/20211031c.html", "2021"],
    ["2021/20211030/20211030.html", "October 30, 2021", "October 30, 2021 - Home, WA", "2021/20211030/20211030c.html", "2021"],
    ["2021/20211024/20211024.html", "October 24, 2021", "October 24, 2021 - Pandleton, OR", "2021/20211024/20211024c.html", "2021"],
    ["2021/20211016/20211016.html", "October 16, 2021", "October 16, 2021 - Mount Baker-Snoqualmie National Forest, WA", "2021/20211016/20211016c.html", "2021"],
    ["2021/20211011/20211011.html", "October 11, 2021", "October 11, 2021 - Home, WA", "2021/20211011/20211011c.html", "2021"],
    ["2021/20211010/20211010.html", "October 10, 2021", "October 10, 2021 - Riverside State Park Campground, WA", "2021/20211010/20211010c.html", "2021"],
    ["2021/20210922/20210922.html", "September 22, 2021", "September 22, 2021 - Home, WA", "2021/20210922/20210922c.html", "2021"],
    ["2021/20210919/20210919.html", "September 19, 2021", "September 19, 2021 - Westport, WA", "2021/20210919/20210919c.html", "2021"], 
    ["2021/20210912/20210912.html", "September 12, 2021", "September 12, 2021 - Baker Lake, WA", "2021/20210912/20210912c.html", "2021"], 
    ["2021/20210906/20210906.html", "September 6, 2021", "September 6, 2021 - Orofino, Idaho", "2021/20210906/20210906c.html", "2021"], 
    ["2021/20210829/20210829.html", "August 29, 2021", "August 29, 2021 - Valley Camp, WA", "2021/20210829/20210829c.html", "2021"], 
    ["2021/20210719/20210719.html", "July 19, 2021", "July 19, 2021 - Valley Camp, WA", "2021/20210719/20210719c.html", "2021"], 
    ["2021/20210710/20210710.html", "July 10, 2021", "July 10, 2021 - Paulina Lake, OR", "2021/20210710/20210710c.html", "2021"], 
    ["2021/20210704/20210704.html", "July 4, 2021", "July 4, 2021 - Curlew Lake, WA", "2021/20210704/20210704c.html", "2021"], 
    ["2021/20210627/20210627.html", "June 27, 2021", "June 27, 2021 - Mountain Loop Highway, WA", "2021/20210627/20210627c.html", "2021"], 
    ["2021/20210612/20210612.html", "June 12, 2021", "June 12, 2021 - Home, WA", "2021/20210612/20210612c.html", "2021"], 
    ["2021/20210531/20210531.html", "May 31, 2021", "May 31, 2021 - Kalaloch, WA", "2021/20210531/20210531c.html", "2021"], 
    ["2021/20210521/20210521.html", "May 21, 2021", "May 21, 2021 - Field Spring, WA", "2021/20210521/20210521c.html", "2021"], 
    ["2021/20210515/20210515.html", "May 15, 2021", "May 15, 2021 - Home, WA", "2021/20210515/20210515c.html", "2021"], 
    ["2021/20210509/20210509.html", "May 9, 2021", "May 9, 2021 - Home, WA", "2021/20210509/20210509c.html", "2021"], 
    ["2021/20210502/20210502.html", "May 2, 2021", "May 2, 2021 - Windy Point, WA", "2021/20210502/20210502c.html", "2021"], 
    ["2021/20210428/20210428.html", "April 28, 2021", "April 28, 2021 - Home, WA", "2021/20210428/20210428c.html", "2021"], 
    ["2021/20210424/20210424.html", "April 24, 2021", "April 24, 2021 - Home, WA", "2021/20210424/20210424c.html", "2021"], 
    ["2021/20210418/20210418.html", "April 18, 2021", "April 18, 2021 - South Fork Stillaguamish River, WA", "2021/20210418/20210418c.html", "2021"], 
    ["2021/20210414/20210414.html", "April 14, 2021", "April 14, 2021 - Home, WA", "2021/20210414/20210414c.html", "2021"], 
    ["2021/20210405/20210405.html", "April 5, 2021", "April 5, 2021 - Deception Pass, WA", "2021/20210405/20210405c.html", "2021"], 
 
    

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
                middleRightTextPostList += "<div id='divhighlighted'><b>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "'>" + PostList[i][1] + "</a>" + 
                                            "  <a href='" + rootPath + "MyPosts/" + PostList[i][3] + "'> 中文 </a></b></div>";
                middleRightTextPostListDetail += "<div id='divhighlighted'><b>   - <a href='" + rootPath + "MyPosts/" + PostList[i][0] + "'>" + PostList[i][2] + "</a>" +
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

