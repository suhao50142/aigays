webpackJsonp([17],{719:function(a,t,e){"use strict";(function(a){function t(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),i=(new Date).getTime(),r=f.reduce(function(a,t){return a+Math.max(t[1],i)-Math.max(t[0],i)},0),s=Math.max(e-t,0),o=r/864e5,c=s/Math.max(o,1),u=r/36e5,m=s/Math.max(u,1),p=r/18e5,l=s/Math.max(p,1),d=n(c,3).split(".");a("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(m,3).split("."),a("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=n(l,3).split("."),a("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),a("#remains_days").text(n(o,0)),a("#remains_hours").text(n(u,0)),a("#remains_minutes").text(n(60*u,0));var h,v=100*Math.min(t,e),g=parseInt(v/e)||0,b=q-r,x=parseInt(100*b/q)||0;h=100==g?"progress-bar-success":g>=x?"progress-bar-success":g>.7*x?"progress-bar-info":g>.4*x?"progress-bar-warning":"progress-bar-danger",a("#objective_progress > .progress-bar").width(g+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(h).children("span").text(g+"%達成"),a("#period_progress > .progress-bar").width(x+"%").children("span").text(x+"%経過");var _=t*q/b;a("#prediction_collection").text(n(Math.floor(_)));var k=Math.min(_/e,1),M=a("#objective_progress").width(),y=M*k-47;a(".pointer").css("left",y+"px");var w=M-y<230?-250:0;a(".pointer-label").css("margin-left",w+"px");var j="";if(t<e&&_>=e){var I,C;f.forEach(function(a){I=I||a[0],C=C||a[1]});var T=e/_*q,D=f.reduce(function(a,t){if(a)return a;var e=t[1]-t[0];return e<T?(T-=e,null):new Date(t[0]+T)},null),E=D.getMonth(),z=D.getDate(),R=D.getHours(),N=D.getMinutes(),S=E+1+"/"+z+" "+(R<10?"0"+R:R)+":"+(N<10?"0"+N:N);j=S+"頃に目標達成できそうよ。"}a("#prediction_completion_date").text(j)}function n(a,t){if(t=t||0,a===1/0||a===-(1/0))return"∞";var e=a.toFixed(t).split("."),n=parseInt(e[0]);return n.toLocaleString()+(1===e.length?"":"."+e[1])}function i(){var t=(new Date).getTime(),e=a("#period_dates");if(f.forEach(function(n){var i=n[1]-n[0],r=100*i/q+"%",s=new Date(n[0]),o=new Date(n[1]-1),c=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),u=t>=n[0]&&t<n[1],m=t>=n[1],p=u?"progress-bar-active":m?"progress-bar-expired":"progress-bar-remain";a('<div class="progress-bar">').width(r).text(c).addClass(p).appendTo(e)}),a('[data-objective-mode="'+h+'"]').show(),a('[data-objective-mode][data-objective-mode!="'+h+'"]').remove(),a("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:v,step:1}),"achievement"==h){var n=a("[name=objective]:input");a.each(j,function(t,e){a("<option />").attr("value",t).text(e+" ("+t+"個)").appendTo(n)})}else{a("select[name=objective]").click(function(){this.select()});var i=a("#increse_objective_list");I.forEach(function(t){a('<button class="btn btn-default" name="add"  type="button" />').val(t.value).attr("title",t.name).append(a('<i class="fa fa-arrow-up" />')).append(a("<span />").addClass("icon icon-"+t.unit)).appendTo(i)})}a("button[name=add]").click(function(t){t.preventDefault();var e=parseInt(a(this).val()),n=parseInt(a("[name=objective]:input").val());a("[name=objective]:input").val(n+e).trigger("change")}),a("button[name=reset]").click(function(t){t.preventDefault(),a("[name=objective]:input").val(0).trigger("change")}),a("[name=expectation]:input").change(function(){u(),m()}).val("drop");var g=a("#prize_list");I.forEach(function(t){a('<div class="prize-list" />').append(a('<h4 class="prize-list-header" />').text(t.name).append(a('<span class="prize-value" />').text("@"+t.value))).append(a('<div class="prize-list-body" />').attr("data-prize",t.unit)).appendTo(g)});var b=C.reduce(function(a,t){return Math.max(a,t.drops.length)},0),_=a("#map tbody");if(C.forEach(function(t,e){var n=a("<td />").attr("data-chart",e).append(a('<span class="barchart" />')).append(a('<span class="barchart-label" />')).append(a('<span class="marathon" />'));a("<tr />").append(a("<th />").text(t.name)).append(a("<td />").text(""+t.charisma+"/"+t.stamina)).append(function(){for(var e=t.drops.map(function(t){var e=t.icon?a("<i />").attr("title",t.name).addClass("icon icon-"+t.icon):a("<span />").text(t.name),n=t.set?a('<span class="badge" />').text("x"+t.set):null;return a("<td />").append(e).append(n)}),n=t.drops.length;n<b;n++)e.push(a("<td />"));return e}).append(n).appendTo(_)}),a("#map thead th.drops").attr("colspan",b),x){var k=a("#rewards tbody");T.forEach(function(t){a("<tr />").attr("data-amount",t.amount).append(a('<td class="text-right" />').html('<span class="diff"></span> '+t.amount)).append(a("<td />").html('<span class="icon icon-'+t.unit+'"></span>')).appendTo(k)})}var M=a("[name=estimate_map]:input").change(function(){p(),S.estimateMap=parseInt(a(this).val()),s(S)});C.forEach(function(t,e){a("<option />").val(e).text(t.name+" ("+t.charisma+"/"+t.stamina+")").appendTo(M)});for(var y=a("[name=estimate_rank]:input").change(function(){p(),S.estimateRank=parseInt(a(this).val()),s(S)}),w=1;w<=200;w++){var D=l(w),E=d(w),z=""+w+" ("+D+"/"+E+")";a("<option />").val(w).text(z).appendTo(y)}var R=a("[name=estimate_use_crystal]").change(function(){p(),S.estimateUseCrystal=a(this).val(),s(S)}),N=a("[name=estimate_natural_recovery]:input").change(function(){p(),S.estimateNaturalRecovery=this.checked,s(S)});a("*[title]").tooltip();var S=r();a("[name=current]:input").val(S.current),"exchange"==h?a("[name=objective]:input").val(S.objective):a("[name=objective]:input").val([S.objective]),a("[name=current]:input, [name=objective]:input").change(function(){S[this.name]=a(this).val(),s(S),o(),c(),m(),p()}),M.val(S.estimateMap),y.val(S.estimateRank),R.val(S.estimateUseCrystal),N.prop("checked",S.estimateNaturalRecovery),"exchange"==h&&c(),x&&o(),u(),m(),p()}function r(){var t={},e={current:b,objective:g,estimateMap:k,estimateRank:M,estimateUseCrystal:y,estimateNaturalRecovery:w};try{t=JSON.parse(a.cookie(_))}catch(a){}return a.extend(e,t)}function s(t){a.cookie(_,JSON.stringify(t),{expires:30})}function o(){if(x){var t=45,e=9,n=parseInt(a("[name=current]:input").val()),i=a("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=a(this),r=i.attr("data-amount")-n;if(r<-t)i.hide();else if(r<0)i.css("opacity",.5).show();else if(r<t)i.addClass("active").css("opacity",1).show();else if(r<t*e){var s=1-Math.floor(r/t)*t/(t*(e+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",c=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(c)})}}function c(){if("exchange"==h){var t=parseInt(a("[name=current]:input").val());I.forEach(function(e){for(var n=a('[data-prize="'+e.unit+'"]').empty(),i=0;i<t;i+=e.value){var r=a("<i />").addClass("icon icon-"+e.unit),s=25*Math.min(t-i,e.value)/e.value;a('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(n)}})}}function u(){var t=a("[name=expectation]:input").val(),e=1/0,i=0,r="drop"==t?null:t,s=C.map(function(a){var t=a.expectation/(r&&a[r]||1);return e=0,i=Math.max(i,t),t}),o=r?3:2;C.forEach(function(t,r){var c=a("[data-chart="+r+"]"),u=s[r],m=u/(i-e),p=120*m+240;c.find("span.barchart-label").text(n(u,o)+"個"),c.find("span.barchart").css({width:100*m+"%",backgroundColor:"hsla("+p+", 80%, 50%, 0.5)"})})}function m(){var t=parseInt(a("[name=objective]:input").val()),e=parseInt(a("[name=current]:input").val()),i=Math.max(t-e,0);C.forEach(function(t,e){var r=a("[data-chart="+e+"]"),s=i?Math.ceil(i/t.expectation):0;r.find("span.marathon").text("残り"+n(s)+"周")})}function p(){var t=parseInt(a("[name=current]:input").val()),e=parseInt(a("[name=objective]:input").val()),i=C[parseInt(a("[name=estimate_map]:input").val())],r=Math.max(e-t,0),s=Math.ceil(r/i.expectation);a("#estimate_required_marathon").text(n(s));var o=(new Date).getTime(),c=f.reduce(function(a,t){return a+Math.max(t[1],o)-Math.max(t[0],o)},0),u=0+a("[name=estimate_natural_recovery]:input").prop("checked"),m=Math.floor(c/18e4)*u,p=Math.floor(c/36e5)*u,h=parseInt(a("[name=estimate_rank]").val()),v=l(h),g=d(h),b=Math.ceil(i.charisma*s),x=Math.ceil(i.stamina*s),_=a("[name=estimate_use_crystal]:input").val(),k=0+("both"===_||"charisma"===_),M=0+("both"===_||"stamina"===_),y=Math.ceil(Math.max(b-m,0)/v)*k,w=Math.ceil(Math.max(x-p,0)/g)*M,j=y+w;a("#estimate_required_crystal").text(n(j));var I=0===y?"diff-eq":y>0?"diff-plus":"diff-minus";a("#estimate_required_crystal_for_charisma").attr("class",I).text(n(y)),I=0===w?"diff-eq":w>0?"diff-plus":"diff-minus",a("#estimate_required_crystal_for_stamina").attr("class",I).text(n(w));var T=m+v*y,q=p+g*w,D=Math.floor(Math.min(T/i.charisma,q/i.stamina,s));a("#estimate_available_marathon").text(n(D));var E=D-s;I=0===E?"diff-eq":E>0?"diff-plus":"diff-minus";var z=(E>=0?"+":"")+n(E);a("#estimate_available_marathon_diff").attr("class",I).text(z);var R=i.charisma*D;a("#estimate_using_charisma").text(n(R)),E=R-b,I=0===E?"diff-eq":E>0?"diff-plus":"diff-minus",z=(E>=0?"+":"")+n(E),a("#estimate_using_charisma_diff").attr("class",I).text(z);var N=Math.ceil(i.stamina*D);a("#estimate_using_stamina").text(n(N)),E=N-x,I=0===E?"diff-eq":E>0?"diff-plus":"diff-minus",z=(E>=0?"+":"")+n(E),a("#estimate_using_stamina_diff").attr("class",I).text(z);var S=t+Math.ceil(i.expectation*D);a("#estimate_result_collection").text(n(S)),E=S-e,I=0===E?"diff-eq":E>0?"diff-plus":"diff-minus",z=(E>=0?"+":"")+n(E),a("#estimate_result_collection_diff").attr("class",I).text(z)}function l(a){return 27+(a<=100?3*a:300+a-100)}function d(a){return 12+(a<=100?0:Math.floor((a-100)/20)+1)}e(32);var f=[["2015/04/16 15:00:00","2015/04/23 10:00:00"],["2015/04/23 15:00:00","2015/04/30 10:00:00"]].map(function(a){return a.map(Date.parse)}),h="achievement",v=1/0,g=1500,b=20,x=!0,_="talisman-timer",k=0,M=100,y="both",w=!0,j={25:"ナギが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50",1620:"+ 黒精霊",1665:"+ ゴールドアーマー",1710:"+ 黒精霊",1755:"+ プラチナアーマー",1800:"+ 虹精霊"},I=[],C=[{name:"妖怪大決戦",charisma:90,stamina:12,expectation:22,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:3},{name:"封印の札3",icon:"sealing-talisman-3",set:2},{name:"封印の札1",icon:"sealing-talisman-3",set:1},{name:"虹精霊",icon:"rainbow-sprit"}]},{name:"封妖の忍者",charisma:70,stamina:8,expectation:13,drops:[{name:"封印の札5",icon:"sealing-talisman-5",set:2},{name:"封印の札1",icon:"sealing-talisman-1",set:3},{name:"サノスケ",icon:"sanosuke"},{name:"ニエル",icon:"niel"}]},{name:"妖怪牛鬼",charisma:40,stamina:5,expectation:7,drops:[{name:"封印の札3",icon:"sealing-talisman-3",set:2},{name:"封印の札1",icon:"sealing-talisman-1",set:1},{name:"ローレン",icon:"loren"},{name:"魔水晶",icon:"demon-crystal-1",set:3}]},{name:"大妖怪ぬらりひょん",charisma:50,stamina:7,expectation:11,drops:[{name:"封印の札3",icon:"sealing-talisman-3",set:3},{name:"封印の札1",icon:"sealing-talisman-1",set:2},{name:"カゲロウ",icon:"kagerou"},{name:"プラチナアーマー",icon:"platinum-bucket"}]},{name:"妖怪封じの要石",charisma:40,stamina:4,expectation:5,drops:[{name:"封印の札3",icon:"sealing-talisman-3",set:1},{name:"封印の札1",icon:"sealing-talisman-1",set:2},{name:"ハリッサ",icon:"harissa"},{name:"ヴァレリー",icon:"valerie"}]},{name:"疾風の刃",charisma:30,stamina:2,expectation:2,drops:[{name:"封印の札1",icon:"sealing-talisman-1",set:2},{name:"ロザリー",icon:"rosalie"},{name:"水晶",icon:"crystal"}]},{name:"襲われた住民",charisma:20,stamina:1,expectation:1,drops:[{name:"封印の札1",icon:"sealing-talisman-1",set:2}]}],T=[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}],q=f.reduce(function(a,t){return a+t[1]-t[0]},0);a(function(){i(),setInterval(t,1e3)})}).call(t,e(2))}},[719]);