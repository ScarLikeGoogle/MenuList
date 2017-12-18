var fmid = "fhindex";	//菜单点中状态
var mid = "fhindex";	//菜单点中状态
function siMenu(id,fid,MENU_NAME,MENU_URL){
    if(id != mid){
        $("#"+mid).removeClass();
        mid = id;
    }
    if(fid != fmid){
        $("#"+fmid).removeClass();
        fmid = fid;
    }
    $("#"+fid).attr("class","active open");
    $("#"+id).attr("class","active");
    top.mainFrame.tabAddHandler(id,MENU_NAME,MENU_URL);
}
$(function () {
      // $.ajax({
      //     type: 'get',
      //     url: baseUrl+'menu/list',
      //     dataType:'json',
      //     async: false,
      //     cache:true,
      //     success: function (res) {
      var res = {
        "code":1,
        "message":"查询成功！",
        "rows":[{
          "name":"第一个HTML","icon":"images/emoji-1.png","angle":"fa fa-angle-down","pId":0,"id":1,"url":"#","open":"true","target":"mainFrame"},
          {"name":"第二个HTML","icon":"images/emoji-2.png","angle":"","pId":1,"id":2,"url":"subpage/Second.html","open":"true","target":"mainFrame"},
          {"name":"第三个HTML","icon":"images/emoji-3.png","angle":"","pId":1,"id":3,"url":"subpage/Third.html","open":"true","target":"mainFrame"},
          {"name":"第四个HTML","icon":"images/emoji-4.png","angle":"","pId":1,"id":6,"url":"subpage/Four.html","open":"true","target":"mainFrame"}
        ]};
              if(res.code == 1){
                  var html = "";
                  html += '<ul class="sidebar-menu">';
                  var id;//一级标签
                  var c_id;//二级标签
                  var m_id;//三级标签
                  var n_id;//四级标签
                  for(var i = 0;i <res.rows.length;i++){
                      if(res.rows[i].pId == 0){
                          id = res.rows[i].id;
                          html += '<li class="treeview">'+
                              '<a style="border-bottom:1px solid #E5E5E5"';
                          if('#' != res.rows[i].url && res.rows[i].url){
                              html += 'target="mainFrame" onclick="siMenu('+"'z"+id+"','lm"+id+"','"+res.rows[i].name+"','"+res.rows[i].url+"'"+')" >';
                          }else{
                              html += '>';
                          }
                          html += '<img src="'+res.rows[i].icon+'" alt="" style="width: 16px;height: 16px;margin-right: 8px;margin-top: -3px;">'+
                          '<span>'+res.rows[i].name+'</span>'+
                          '<i class="'+res.rows[i].angle+' pull-right"></i>'+
                          '</a>';
                          if(res.rows[i].angle  && res.rows[i].angle != "") {
                              html += '<ul class="treeview-menu menu-open" style="display: block;" id="submenu">';
                              for (var j = 0; j < res.rows.length; j++) {
                                  //二级子菜单
                                  if (res.rows[j].pId == id) {
                                      c_id = res.rows[j].id;
                                      html += '<li style="display: block" class="treeview">' +
                                          '<a ';
                                          if('#' != res.rows[j].url && res.rows[j].url){
                                              html += 'target="mainFrame" onclick="siMenu('+"'z"+c_id+"','lm"+id+"','"+res.rows[j].name+"','"+res.rows[j].url+"'"+')" >';
                                          }else{
                                              html += '>';
                                          }
                                          html += '<img src="' + res.rows[j].icon + '" alt="" style="width: 16px;height: 16px;margin-right: 8px;">' +
                                          '<span>' + res.rows[j].name + '</span>' +
                                          '<i class="' + res.rows[j].angle + ' pull-right"></i>' +
                                          '</a>';
                                      if(res.rows[j].angle && res.rows[j].angle != "") {
                                          html += '<ul class="treeview-menu" style="display: block;padding-left: 0">';
                                          for (var m = 0; m < res.rows.length; m++) {
                                              //三级子菜单
                                              if (res.rows[m].pId == c_id) {
                                                  m_id = res.rows[m].id;
                                                  html += '<li style="display: inherit">' +
                                                      '<a ';
                                                      if('#' != res.rows[m].url && res.rows[m].url){
                                                          html += 'target="mainFrame" onclick="siMenu('+"'z"+m_id+"','lm"+c_id+"','"+res.rows[m].name+"','"+res.rows[m].url+"'"+')" >';
                                                      }else{
                                                          html += '>';
                                                      }
                                                      html += '<img src="' + res.rows[m].icon + '" alt="" style="width: 16px;height: 16px;margin-right: 8px;">' +
                                                      '<span>' + res.rows[m].name + '</span>' +
                                                      '<i class="' + res.rows[m].angle + ' pull-right" style="margin-right: 4%;"></i>' +
                                                      '</a>';
                                                  if (res.rows[m].angle && res.rows[m].angle != "") {
                                                      html += '<ul class="treeview-menu" style="display: none;padding-left: 0">';
                                                      for (var n = 0; n < res.rows.length; n++) {
                                                          //四级子菜单
                                                          if (res.rows[n].pId == m_id) {
                                                              n_id = res.rows[n].id;
                                                              html += '<li style="display: inherit">' +
                                                                  '<a target="mainFrame" class="four_menu" style="margin-left: 45px;"';
                                                                  if('#' != res.rows[n].url && res.rows[n].url){
                                                                      html += 'onclick="siMenu('+"'z"+n_id+"','lm"+m_id+"','"+res.rows[n].name+"','"+res.rows[n].url+"'"+')" >';
                                                                  }
                                                                  html += '<img src="' + res.rows[n].icon + '" alt="" style="width: 16px;height: 16px;margin-right: 8px;">' +
                                                                  '<span>' + res.rows[n].name + '</span>' +
                                                                  '</a>' +
                                                                  '</li>';
                                                          }
                                                      }
                                                      html += '</ul>';
                                                  }
                                                  html += '</li>';
                                              }
                                          }
                                          html += '</ul>';
                                      }
                                      html += '</li>';
                                  }
                              }
                              html += '</ul>';
                          }
                          html += '</li>';
                      }
                  }
                  $('.sidebar-menu').append(html);
                  $('.treeview-menu li').click(function() {
                      $(this).addClass('active').siblings().removeClass('active');
                      // $('.treeview-menu li').css('background-color', '#EEF0EE');
                      // $(this).css('background-color', '#fff');
                  });
                  $('.treeview-menu li').click(function(){
                      var _index = $(this).index()
                      // $(this).children('a').addClass('trangl')
                      // $(this).siblings().children('a').removeClass('trangl')
                      $(this).addClass('active').siblings().removeClass('active')
                      // $('.masthead li').eq(0).removeClass('active_show').addClass('hidden_title');
                      $('.masthead li').eq(_index).removeClass('hidden_title').addClass('active_show').siblings().removeClass('active_show')
                  })
              }else{
                  console.log('error')
              }
})
$(document).ready(function () {
    $('.dropdown-toggle').dropdown();

});
