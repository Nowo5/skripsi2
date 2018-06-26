this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/daftarHadirTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div style="margin-top: 50px;" ></div>\r\n';
 moment.locale('en-ca'); ;
__p += '\r\n<div class="row">\r\n  <div class="large-1 columns">\r\n    <i class="fi-page-export-pdf"> </i>\r\n    <i class="fi-page-export-pdf"> </i>\r\n  </div>\r\n  <div class="large-11 columns">\r\n  <div id="editor"></div>\r\n    <div class="progress secondary" >\r\n        <button id="cmdDaftar" class="meter button tiny"  style="width:20%;">Save File</button>\r\n    </div>\r\n    <div class="progress secondary" >\r\n        <button class="meter button tiny"  style="width:30%;"><a href="#" id ="export" style="color:white;"> Save as CSV</a></button>\r\n    </div>\r\n     \r\n  </div>\r\n</div>\r\n<div id="' +
((__t = ( obj.daftarID )) == null ? '' : __t) +
'" class="bump" style="width: 800px;" >\r\n    <h3 id="namaEventSF"> ' +
((__t = ( obj.titel )) == null ? '' : __t) +
' <small>' +
((__t = ( obj.event.nama )) == null ? '' : __t) +
'<small></h3>\r\n        ';
 if(obj.event.sessionStatus) { ;
__p += '\r\n            <p id="namaSession">' +
((__t = ( obj.event.sessions[0].nama )) == null ? '' : __t) +
'</p>\r\n            <p id="tglEventSF">' +
((__t = ( moment(new Date(obj.event.sessions[0].waktuMulai)).zone(0).add(obj.event.timeZone.GMT,'hours').format("dddd, D MMMM YYYY [@] H:mm ") )) == null ? '' : __t) +
' (' +
((__t = ( obj.event.timeZone.IANA )) == null ? '' : __t) +
') </p>\r\n        ';
 }else{ ;
__p += '\r\n            <p id="namaSession" style="display: hidden;"></p>\r\n            <p id="tglEventSF">' +
((__t = ( moment(new Date(obj.event.waktuMulai)).zone(0).add(obj.event.timeZone.GMT,'hours').format("dddd, D MMMM YYYY [@] H:mm ") )) == null ? '' : __t) +
' (' +
((__t = ( obj.event.timeZone.IANA )) == null ? '' : __t) +
') </p>\r\n        ';
 };
__p += '\r\n    \r\n    <div id="dvData">\r\n    <table id="example" class="custom-table" style="height:400px; overflow:auto;">\r\n        <thead>\r\n            <tr>\r\n                <th width="90">No</th>\r\n                <th width="500">Guest Name</th>\r\n                <th width="500">Affiliation</th>\r\n                <th width="500">Attendance</th>\r\n                <th width="300">Note</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            ';
 if(typeof obj.tamuUndangan != 'undefined') { ;
__p += '\r\n                ';
 for(var i=0; i<obj.tamuUndangan.length; i++) { ;
__p += '\r\n                    <tr>\r\n                        <td>' +
((__t = ( (i+1) )) == null ? '' : __t) +
'</td>\r\n                        <td>' +
((__t = ( obj.tamuUndangan[i].namaDepan )) == null ? '' : __t) +
' ' +
((__t = ( obj.tamuUndangan[i].namaBelakang )) == null ? '' : __t) +
'</td>\r\n                        <td>' +
((__t = ( obj.tamuUndangan[i].dariPihak )) == null ? '' : __t) +
'</td>\r\n                        ';
 if(obj.event.sessionStatus) { ;
__p += '\r\n                            ';
 if(obj.tamuUndangan[i].attendance.length > 0 ) { ;
__p += '\r\n                                <td>' +
((__t = ( moment(new Date(obj.tamuUndangan[i].attendance[0].jamDatang)).zone(0).add(obj.event.timeZone.GMT,'hours').format("ddd, D MMM YYYY H:mm ") )) == null ? '' : __t) +
'</td>\r\n                            ';
 }else{ ;
__p += '\r\n                                <td>-</td>\r\n                            ';
 };
__p += '    \r\n                        ';
 }else{ ;
__p += '  \r\n                            ';
 if(obj.tamuUndangan[i].isHadir) { ;
__p += '\r\n                                <td>' +
((__t = ( moment(new Date(obj.tamuUndangan[i].jamDatang)).zone(0).add(obj.event.timeZone.GMT,'hours').format("ddd, D MMM YYYY H:mm ") )) == null ? '' : __t) +
'</td>\r\n                            ';
 }else{ ;
__p += '\r\n                                <td>-</td>\r\n                            ';
 };
__p += '  \r\n                        ';
 };
__p += '    \r\n                        <td></td>          \r\n                    </tr>\r\n                ';
 } ;
__p += '\r\n            ';
 } ;
__p += '\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <p> Thank you for using (c) Tamugo.com - 2018 </p>\r\n </div>\r\n<script type=\'text/javascript\'>\r\n        $(document).ready(function () {\r\n            var namaEvent = $(\'#namaEventSF\').text();\r\n            var tglEvent = $(\'#tglEventSF\').text();\r\n            var namaSesi = $(\'#namaSession\').text();\r\n            function exportTableToCSV($table, filename) {\r\n                var $headers = $table.find(\'tr:has(th)\')\r\n                    ,$rows = $table.find(\'tr:has(td)\')\r\n                    // Temporary delimiter characters unlikely to be typed by keyboard\r\n                    // This is to avoid accidentally splitting the actual contents\r\n                    ,tmpColDelim = String.fromCharCode(11) // vertical tab character\r\n                    ,tmpRowDelim = String.fromCharCode(0) // null character\r\n                    // actual delimiter characters for CSV format\r\n                    ,colDelim = \'","\'\r\n                    ,rowDelim = \'"\\r\\n"\';\r\n                    // Grab text from table into CSV formatted string\r\n                    var csv = \'"\';\r\n                    csv += namaEvent;\r\n                    csv += rowDelim;\r\n                    if(namaSesi !=""){\r\n                        csv += namaSesi;\r\n                        csv += rowDelim;\r\n                    }\r\n                    csv += tglEvent;\r\n                    csv += rowDelim;\r\n                    csv += rowDelim;\r\n                    csv += formatRows($headers.map(grabRow));\r\n                    csv += rowDelim;\r\n                    csv += formatRows($rows.map(grabRow)) + \'"\';\r\n                    // Data URI\r\n                    var csvData = \'data:application/csv;charset=utf-8,\' + encodeURIComponent(csv);\r\n                $(this)\r\n                    .attr({\r\n                    \'download\': filename\r\n                        ,\'href\': csvData\r\n                        //,\'target\' : \'_blank\' //if you want it to open in a new window\r\n                });\r\n                //------------------------------------------------------------\r\n                // Helper Functions \r\n                //------------------------------------------------------------\r\n                // Format the output so it has the appropriate delimiters\r\n                function formatRows(rows){\r\n                    return rows.get().join(tmpRowDelim)\r\n                        .split(tmpRowDelim).join(rowDelim)\r\n                        .split(tmpColDelim).join(colDelim);\r\n                }\r\n                // Grab and format a row from the table\r\n                function grabRow(i,row){\r\n                    var $row = $(row);\r\n                    //for some reason $cols = $row.find(\'td\') || $row.find(\'th\') won\'t work...\r\n                    var $cols = $row.find(\'td\'); \r\n                    if(!$cols.length) $cols = $row.find(\'th\');  \r\n                    return $cols.map(grabCol)\r\n                                .get().join(tmpColDelim);\r\n                }\r\n                // Grab and format a column from the table \r\n                function grabCol(j,col){\r\n                    var $col = $(col),\r\n                        $text = $col.text();\r\n                    return $text.replace(\'"\', \'""\'); // escape double quotes\r\n                }\r\n\r\n            }\r\n            // This must be a hyperlink\r\n            $("#export").click(function (event) {\r\n                // CSV\r\n                exportTableToCSV.apply(this, [$(\'#dvData>table\'), \'daftarHadir.csv\']);\r\n                // IF CSV, don\'t do event.preventDefault() or return false\r\n                // We actually need this to be a typical hyperlink\r\n            });\r\n        });\r\n    </script>';

}
return __p
};

this["JST"]["assets/templates/daftarTamuTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\r\n<div class="row">\r\n  <div class="large-1 columns">\r\n    <i class="fi-page-export-pdf"> </i>\r\n  </div>\r\n  <div class="large-11 columns">\r\n  <div id="editor"></div>\r\n    <div class="progress secondary" >\r\n        <button id="cmdDaftar" class="meter button tiny"  style="width:20%">Save File</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="row">\r\n<div id="' +
((__t = ( obj.daftarID )) == null ? '' : __t) +
'" class="bump" style="width: 850px;" >\r\n    <h3> ' +
((__t = ( obj.titel )) == null ? '' : __t) +
' <small>' +
((__t = ( obj.event.nama )) == null ? '' : __t) +
'<small></h3>\r\n    <p>' +
((__t = ( moment(new Date(obj.event.waktuMulai)).format("dddd, D MMMM YYYY [@] H:mm z") )) == null ? '' : __t) +
'</p>\r\n    <table id="example" class="custom-table" style="height:400px; overflow:auto;">\r\n        <thead>\r\n            <tr>\r\n                <th width="90">id</th>\r\n                <th width="500">Name</th>\r\n                <th width="500">Came</th>\r\n                <th width="300">Note</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        ';
 for(var i=0; i<obj.daftarTamu.length; i++) { ;
__p += '\r\n            <tr>\r\n                <td >' +
((__t = ( (i+1) )) == null ? '' : __t) +
'</td>\r\n                <td>' +
((__t = ( obj.daftarTamu[i].namaDepan )) == null ? '' : __t) +
'&nbsp;&nbsp;' +
((__t = ( obj.daftarTamu[i].namaBelakang )) == null ? '' : __t) +
'</td>\r\n                \r\n                 ';
 if(obj.daftarTamu[i].isHadir){ ;
__p += '\r\n                        <td class="ObjJamDatang" > ' +
((__t = ( obj.daftarTamu[i].jamDatang )) == null ? '' : __t) +
'</td>\r\n                    ';
 }else{ ;
__p += '\r\n                         <td>' +
((__t = ( obj.daftarTamu[i].jamDatangLokalString )) == null ? '' : __t) +
'</td>\r\n                        \r\n                    ';
 } ;
__p += '\r\n                  <td></td>  \r\n            </tr>\r\n        ';
 } ;
__p += '\r\n\r\n        </tbody>\r\n    </table>\r\n    <p> Thank you for using (c) Tamugo.com - 2018 </p>\r\n </div>\r\n</div>\r\n<script >\r\n    $( document ).ready(function() {\r\n    moment.locale(\'en-ca\');\r\n    var kalendar = $(".ObjJamDatang");\r\n    _.each(kalendar, function (tanggal){\r\n        var momentObj=moment(new Date(tanggal.innerText));\r\n        var tanggalIndo = momentObj.format("ddd, D MMMM YYYY");\r\n        var jamIndo = momentObj.format("H:mm z");\r\n        tanggal.innerHTML="<td>"+ tanggalIndo +" "+ jamIndo + "</td>";\r\n    })\r\n    });    \r\n</script>\r\n';

}
return __p
};

this["JST"]["assets/templates/generateLabelTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div style="margin-top: 20px;"></div>\r\n<div class="row">\r\n  <div class="large-1 columns">\r\n\t<i class="fi-page-export-pdf"> </i>\r\n  </div>\r\n  <div class="large-11 columns">\r\n\t<div id="' +
((__t = ( obj.labelID )) == null ? '' : __t) +
'" class=\'progress secondary\' data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'">\r\n\t    <span id="' +
((__t = ( obj.meterID )) == null ? '' : __t) +
'" class=\'meter button tiny\' data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'"\r\n\t    style=\'width:20%\'> Save File  ' +
((__t = ( obj.fileID )) == null ? '' : __t) +
' </span>\r\n\t</div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/imageUploaderTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form id="' +
((__t = ( obj.uploadFormID )) == null ? '' : __t) +
'"\r\n      action="/file/s3upload" method="post" enctype="multipart/form-data">\r\n\r\n  <div class="row ">\r\n\r\n    <div id="' +
((__t = ( obj.imageContainerID )) == null ? '' : __t) +
'"\r\n         class="small-12 columns imageUploader has-tip" data-tooltip title="Click to change image">\r\n\r\n         <input id="' +
((__t = ( obj.chooseID )) == null ? '' : __t) +
'"  \r\n               type="file" name="avatar" class="hidden-input small-12 columns"\r\n                style="cursor: pointer;">\r\n    </div>\r\n\r\n\r\n    <div id="' +
((__t = ( obj.controlsID )) == null ? '' : __t) +
'" class="controlImage small-12 small-centered columns">\r\n    \r\n        <input id="' +
((__t = ( obj.uploadBID )) == null ? '' : __t) +
'" class="button uploadBg small-offset-3 small-3 columns" type="submit" value="">\r\n        \r\n        <button id="' +
((__t = ( obj.cancelBID )) == null ? '' : __t) +
'" class="cancelBg small-3 end columns"  type="button" ></button>\r\n\r\n        <div class="row show-for-large-only">\r\n          <panel class="small-offset-1  small-10 columns blackOpacityBg">\r\n            <h4 id="' +
((__t = ( obj.fileNameID )) == null ? '' : __t) +
'" class="small-6 columns"></h4>\r\n            <h4 id="' +
((__t = ( obj.fileSizeID )) == null ? '' : __t) +
'" class="small-2 columns"></h4>\r\n            <h4 id="' +
((__t = ( obj.percentID )) == null ? '' : __t) +
'" class="small-4 columns"></h4>\r\n            <div class="small-12 columns">\r\n              <div class="progress success radius round">\r\n                <span id="' +
((__t = ( obj.meterID )) == null ? '' : __t) +
'" class="meter" style="width: 0%"></span>\r\n              </div>\r\n            </div>\r\n          </panel>\r\n        </div>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n  \r\n</form>';

}
return __p
};

this["JST"]["assets/templates/rsvpGeneralTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="large-1 columns">\r\n    <i class="fi-page-export-pdf"> </i>\r\n  </div>\r\n  <div class="large-11 columns">\r\n  <div id="editor"></div>\r\n    <div class="progress secondary" >\r\n        <button id="cmdDaftar" class="meter button tiny"  style="width:20%">Save File</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="row">\r\n<div id="' +
((__t = ( obj.daftarID )) == null ? '' : __t) +
'" class="bump" style="width: 800px;" >\r\n    <h3> ' +
((__t = ( obj.titel )) == null ? '' : __t) +
' <small>' +
((__t = ( obj.event.nama )) == null ? '' : __t) +
'<small></h3>\r\n    <p>' +
((__t = ( moment(new Date(obj.event.waktuMulai)).format("dddd, D MMMM YYYY [@] H:mm z") )) == null ? '' : __t) +
'</p>\r\n    <table id="example" class="custom-table" style="height:400px; overflow:auto;">\r\n        <thead>\r\n            <tr>\r\n                <th width="100">id</th>\r\n                <th width="400">Name</th>\r\n                <th width="200">Email</th>\r\n                <th width="300">Message</th>\r\n                <th width="300">Rsvp</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        ';
 for(var i=0; i<obj.rsvpPesan.length; i++) { ;
__p += '\r\n            <tr>\r\n                <td >' +
((__t = ( (i+1) )) == null ? '' : __t) +
'</td>\r\n                <td>' +
((__t = ( obj.rsvpPesan[i].namaDepan )) == null ? '' : __t) +
'&nbsp;&nbsp;' +
((__t = ( obj.rsvpPesan[i].namaBelakang )) == null ? '' : __t) +
'</td>\r\n                <td>' +
((__t = ( obj.rsvpPesan[i].email )) == null ? '' : __t) +
'</td>\r\n                <td>  ';
 if(typeof obj.rsvpPesan[i].message =='undefined'){  ;
__p += '\r\n                            -\r\n                      ';
 }else{ ;
__p += '\r\n                           ' +
((__t = ( obj.rsvpPesan[i].message )) == null ? '' : __t) +
' \r\n                      ';
 } ;
__p += '                    \r\n                </td>\r\n                <td>';
 if(obj.rsvpPesan[i].RSVPstatus == 'undefined' ){  ;
__p += '\r\n                            -\r\n                    ';
 }else{ ;
__p += '\r\n                        ';
 if( obj.rsvpPesan[i].RSVPstatus == 'true' ){ ;
__p += '\r\n                            Attend\r\n                        ';
 }else{ ;
__p += '\r\n                            Not yet attend\r\n                        ';
 } ;
__p += '\r\n                    ';
};
__p += '\r\n                </td>\r\n            </tr>\r\n        ';
 } ;
__p += '\r\n\r\n        </tbody>\r\n    </table>\r\n    <p> Thank you for using (c) Tamugo.com - 2017 </p>\r\n </div>\r\n</div>';

}
return __p
};

this["JST"]["assets/templates/searchSuggestionTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>' +
((__t = ( obj.value )) == null ? '' : __t) +
' - <small> ' +
((__t = ( obj.type )) == null ? '' : __t) +
' </small> </p>';

}
return __p
};

this["JST"]["assets/templates/sendEmailInvitation.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<!-- <div class="row">\r\n  <div class="large-12 columns"> -->\r\n  \t<div id="' +
((__t = ( obj.labelID )) == null ? '' : __t) +
'" data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'"  style="float:right;">\r\n\r\n\t   <span id="' +
((__t = ( obj.meterID )) == null ? '' : __t) +
'" class="button small" data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'"> <i class="fi-mail" style="font-size:1em;"> </i> Kirim Email</span>\r\n\t</div>\r\n  \t<div id="embedPDF">\r\n\t\t<div style="background: #fff; margin: 0 auto; display: block;">\r\n\t\t\t<div style="width:50%; display:inline-block; float:left;">\r\n\t\t\t\t<img src="/images/logo_email.png"  style="max-width:40%; display: block;" />\r\n\t\t\t</div>\r\n\t\t\t<div style="clear: both"></div>\r\n\t\t\t<div style="background: #fff; display: block; width: 90%; margin: 0 auto;">\r\n\t\t\t\t<div id="namaTamu"><h2 style="font-weight: 300;">Dear Nama Tamu</h2></div>\r\n\t\t\t\t<div id="salam"><b>' +
((__t = ( obj.organizer )) == null ? '' : __t) +
'</b> mengundang Anda untuk menghadiri sebuah acara <b>' +
((__t = ( obj.namaEvent )) == null ? '' : __t) +
'</b> yang akan diadakan pada :</div>\r\n\t\t\t\t<div style="clear: both;"></div>\r\n\t\t\t\t<div style="max-width:800px; margin: 0 auto;float:left">\r\n\t\t\t\t\t<div style="font-family:\'Open Sans\' , sans-serif; display:block; margin:0 auto; clear:both; background-color:#fff;">\r\n\t\t\t\t\t\t<div style="display: block;margin: 0 auto;padding: 15px;text-align: center;">\r\n\t\t\t\t\t\t\t<table cellpadding=\'10\' style="width:100%; border-spacing:0;  font-size: 15px;">\r\n                        \t\t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Hari/Tanggal </td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="tanggalMulai"><span style="color: #565a5c;">' +
((__t = ( obj.tanggal )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Tempat</td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="namaTempat"><span style="color:#565a5c;">' +
((__t = ( obj.namaTempat )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Alamat </td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="alamatTempat"><span style="color: #565a5c; line-height: 150%;">' +
((__t = ( obj.tempatEvent )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:50%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Waktu Mulai <br /><div id="tglMulai"><h4 style="color: #565a5c;margin: 5px 0; font-size: 15px;">' +
((__t = ( obj.tglMulai )) == null ? '' : __t) +
'</h4></div></td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;">Waktu Selesai <br /><div id="tglSelesai"><h4 style="color: #565a5c;margin: 5px 0; font-size: 15px;">' +
((__t = ( obj.tglSelesai )) == null ? '' : __t) +
'</h4></div></td>\r\n                        \t</tr>\r\n                    \t</table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br>\r\n            <span style="text-align:justify;float:left;display:block">\r\n            \tMohon tunjukkan barcode dibawah ini ketika anda menghadiri acara ini<br>Terima kasih\r\n            </span>\r\n            <div style="clear:both"></div>\r\n            <div id="qrImage" style="width:30%"><img src="/images/qrCodeTamu.jpg" style=" width: 50%; " /></div><br>\r\n            <span style="font-size:14px;font-style:italic; text-align: left;">Salam Hangat <br>Tamugo Team\r\n            \t<br>Mewakili penyelenggara acara\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/sendEmailInvitationENG.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<!-- <div class="row">\r\n  <div class="large-12 columns"> -->\r\n  \t<div id="' +
((__t = ( obj.labelID )) == null ? '' : __t) +
'" data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'"  style="float:right;">\r\n\r\n\t   <span id="' +
((__t = ( obj.meterID )) == null ? '' : __t) +
'" class="button small" data-id="' +
((__t = ( obj.fileID )) == null ? '' : __t) +
'"> <i class="fi-mail" style="font-size:1em;padding-right:15px;"> </i> Send Email</span>\r\n\t</div>\r\n  \t<div id="embedPDF">\r\n\t\t<div style="background: #fff; margin: 0 auto; display: block;">\r\n\t\t\t<div style="width: 50%; display: inline-block; float: left;">\r\n\t\t\t\t<img src="/images/logo_email.png"  style=" max-width:40%; display: block;" />\r\n\t\t\t</div>\r\n\t\t\t<div style="clear: both"></div>\r\n\t\t\t<div style="background: #fff; display: block; width: 90%; margin: 0 auto;">\r\n\t\t\t\t<div id="namaTamu"><h2 style="font-weight: 300;">Dear Guest Name</h2></div>\r\n\t\t\t\t<div id="salam"><b>' +
((__t = ( obj.organizer )) == null ? '' : __t) +
'</b> kindly invites you to attend <b>' +
((__t = ( obj.namaEvent )) == null ? '' : __t) +
'</b> will be held on :</div>\r\n\t\t\t\t<div style="clear: both;"></div>\r\n        <div style="max-width:800px; margin: 0 auto;float:left">\r\n          <div style="font-family:\'Open Sans\' , sans-serif; display:block; margin:0 auto; clear:both; background-color:#fff;">\r\n            <div style="display: block;margin: 0 auto;padding: 15px;text-align: center;">\r\n\t\t\t\t\t\t\t<table cellpadding=\'10\' style="width:100%; border-spacing:0;  font-size: 15px;">\r\n                        \t\t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Day/Date </td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="tanggalMulai"><span style="color: #565a5c;">' +
((__t = ( obj.tanggal )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Location</td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="namaTempat"><span style="color:#565a5c;">' +
((__t = ( obj.namaTempat )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:30%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Address </td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;"><div id="alamatTempat"><span style="color: #565a5c; line-height: 150%;">' +
((__t = ( obj.tempatEvent )) == null ? '' : __t) +
'</span></div></td>\r\n                        \t</tr>\r\n                        \t<tr>\r\n                            \t<td style="width:50%; border-bottom:1px solid #dbdbdb; color:#333; font-size:13px; text-align: left; font-weight:500;">Start Time <br /><div id="tglMulai"><h4 style="color: #565a5c;margin: 5px 0; font-size: 15px;">' +
((__t = ( obj.tglMulai )) == null ? '' : __t) +
'</h4></div></td>\r\n                            \t<td style="border-bottom:1px solid #dbdbdb;padding:15px; text-align: right;font-size:13px;">End Time <br /><div id="tglSelesai"><h4 style="color: #565a5c;margin: 5px 0; font-size: 15px;">' +
((__t = ( obj.tglSelesai )) == null ? '' : __t) +
'</h4></div></td>\r\n                        \t</tr>\r\n                    \t</table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style="clear:both"></div>\r\n            <br>\r\n            <span style="text-align:justify;float:left;display:block">\r\n            \tPlease show this barcode when you attend the event<br>Thank you\r\n            </span>\r\n            <div style="clear:both"></div>\r\n            <div id="qrImage" style="width:30%"><img src="/images/qrCodeTamu.jpg" style=" width: 50%; " /></div><br>\r\n            <span style="font-size:14px;font-style:italic; text-align: left;">Your sincerely <br>Tamugo Team\r\n            \t<br>On Behalf of the Event Organizer\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["assets/templates/venueSuggestionTemplate.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>' +
((__t = ( obj.nama )) == null ? '' : __t) +
' - <small> ' +
((__t = ( obj.kota )) == null ? '' : __t) +
'   ' +
((__t = ( obj.namaRuangan )) == null ? '' : __t) +
' </small> </p>';

}
return __p
};