function getCookie (name) {
 var nameOfCookie = name + "=";
 var x=0;
 while (x <= document.cookie.length) {
   var y=(x+nameOfCookie.length);
   if (document.cookie.substring(x,y)==nameOfCookie) {
     if ( (endOfCookie = document.cookie.indexOf(";",y)) == -1)
        endOfCookie = document.cookie.length;
     return unescape(document.cookie.substring(y, endOfCookie));
   }
   x = document.cookie.indexOf(" ", x) + 1;
   if (x == 0) break;
  }
  return "";
}

function setCookie (name, value, expiredays) {
  var todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function setCookieNo(name, value, expires) {
document.cookie = name + "=" + escape (value) + "; path=/; expires=" + expires.toGMTString();
}

function getCookieNo(Name) {
var search = Name + "="
if (document.cookie.length > 0) { 
offset = document.cookie.indexOf(search)
if (offset != -1) {
offset += search.length
end = document.cookie.indexOf(";", offset)
if (end == -1)
end = document.cookie.length
return unescape(document.cookie.substring(offset, end))
}
}
return "";
}


function open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';


  var windowOuterHeight = 5;

	var centerLeft = parseInt((window.screen.availWidth - width) / 2);
	var centerTop = parseInt(((window.screen.availHeight - height) / 2) - windowOuterHeight);
  
  window.open(url, name, 'left='+centerLeft+',top='+centerTop+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

function open_window2(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';

  window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

function onlyFloat(input) {
	//OnKeyPress="Javascript: return onlyFloat(this);"
    var chars = ".0123456789"; //입력가능한 문자 지정
    return containsCharsOnly(input, chars);
}

function onlyNum(input) {
	//OnKeyPress="Javascript: return onlyNum(this);"
    var chars = "-,0123456789"; //입력가능한 문자 지정
    return containsCharsOnly(input, chars);
}

function onlyTelNum(input) {
	//OnKeyPress="Javascript: return onlyNum(this);"
    var chars = "-0123456789"; //입력가능한 문자 지정
    return containsCharsOnly(input, chars);
}

function containsCharsOnly(input, chars) {
    
    for (var inx = 0; inx <= input.value.length; inx++) {
        if (inx == 0) {//최초입력한 문자
            e = window.event;
            if (window.event) {
                key = e.keyCode;
            } else if (e) {
                key = e.which;
            } else {
                return true;
            }
            keychar = String.fromCharCode(key);
            if (chars.indexOf(keychar) == -1)// window.event 에서 받은 keychar 로 유효성 검사.
                return false;
        }
        else {//최초입력 문자가 아니면, input 의 text를 읽어서 처리한다.
            if (chars.indexOf(input.value.charAt(inx)) == -1) {
                return false;
            }
        }
    }
    return true;
}


function number_format(input)
{
	//OnKeyUp="Javascript: this.value=number_format(this.value);
	input = String(input).replace(/,/g, "");
	var input = String(input);
	var reg = /(\-?\d+)(\d{3})($|\.\d+)/;
	if (reg.test(input))
	{
		return input.replace(reg, function(str, p1, p2, p3)   {
		return number_format(p1) + "," + p2 + "" + p3;
		}
		);
	} else {
		return input;
	}
}


function showLoader() {
	jQuery('#loading-image').css('height', $(document).height()+'px');
	jQuery('#loading-image').show();
	jQuery('#loading-loader').css('margin-top', ($(document).scrollTop() + 200)+'px');
	document.body.style.cursor = 'wait';
}

function hideLoader() {
	document.body.style.cursor = 'default';
	jQuery('#loading-image').hide();
}

function replaceAll(str, orgStr, repStr) {
	return str.split(orgStr).join(repStr);
}

function getLength(obj) {
	var len = 0;
	var s = obj.value;
	var ret = "";
	for (var i = 0; i < s.length; i++) {
		var code = s.charCodeAt(i);
		if (code <= 0x7f) {
			len += 1;
		} else if (code <= 0x7ff) {
			len += 2;
		} else if (code >= 0xd800 && code <= 0xdfff) {
			len += 2; i++;
		} else if (code < 0xffff) {
			len += 2;
		} else {
			len += 2;
		}
		if (len <= 70) {
			ret = s.substring(0, i);
		}
	}
	if (len > 70) {
		alert('입력값은 70바이트를 초과할 수 없습니다');
		obj.value = ret;
	}
}


function removeSpan (tableId, cellIndex){
	var table = $("#" + tableId);
	table.find("tr:not(:first)").each(function(){
		var current = $(this);
		var currentCell = current.find("td:eq(" + cellIndex + ")");
		if (currentCell.css('display')=='none') {
			currentCell.remove();
		}
	});
}
			
function RowSpan(tableId, cellIndex){
	//Copryright GEOMJE, http://geomje.tistory.com
	var table = $("#" + tableId);
	var prev = table.find("tr:first");
	var prevCell = prev.find("td:eq(" + cellIndex + ")");
	SetRowSpan(prevCell,1);
	
	table.find("tr:not(:first)").each(function(){
		var current = $(this);
		var currentCell = current.find("td:eq(" + cellIndex + ")");
		if(currentCell.html() == prevCell.html() && currentCell.html() != ''){
			var prevRowSpan = GetRowSpan(prevCell);
			SetRowSpan(prevCell,prevRowSpan + 1);
			currentCell.hide();
		} else {
			prev = current;
			prevCell = prev.find("td:eq(" + cellIndex + ")");
			SetRowSpan(prevCell,1);
			SetRowSpan(currentCell,1);
		}
	});
}

function GetRowSpan(cell){
	var prevRowSpan = cell.attr("rowSpan");
	if(cell.attr("rowSpan") == "undifined" || cell.attr("rowSpan") == window.undifined)
		prevRowSpan = cell[0].getAttribute("rowSpan");
	if(prevRowSpan == "undifined" || prevRowSpan == window.undifined)
		return 0;
	return parseInt(prevRowSpan);
}

function SetRowSpan(cell,rowSpan) {
	cell.attr("rowSpan",rowSpan);
	if(cell.attr("rowSpan") == "undifined" || cell.attr("rowSpan") == window.undifined)
		cell[0].setAttribute("rowSpan",1);
}