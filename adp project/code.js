
var songrun=false;
var count=1;
var mod=1;
var path=["songs\\Chola Chola.mp3"
,"songs\\life of ram.mp3"
,"songs\\sathiyama nee yanakku.mp3"
,"songs\\Chilla Chilla.mp3"
,"songs\\Thaai Kelavi.mp3"
,"songs\\Mallipoo.mp3"
,"songs\\Ennai Vittu.mp3"
,"songs\\Mayakkama Kalakkama.mp3"
,"songs\\Kanja Poovu Kannala.mp3"
,"songs\\Adheeraa.mp3"
,"songs\\Jimikki Ponnu.mp3"
];

var sname=["Chola Chola",
"life of ram",
"sathiyama nee yanakku",
"Chilla Chilla",
"Thaai Kelavi",
"Mallipoo",
"Ennai Vittu",
"Mayakkama Kalakkama",
"Kanja Poovu Kannala",
"Adheeraa",
"Jimikki Ponnu"
];

var sd=[
	"Movie: PS-1<br>Released: 2022<br>Music Director: A.R.Rahman"
	,"Actor: Vijay Sethupathi<br>Movie: 96<br>Released: 2018<br>Music Director: Govind Vasantha"
	,"Actor: Shivakarthikeyan<br>Movie: Ethier neechal<br>Released: 2013<br>Music Director: Anirudh"
	,"Actor: Ajith Kumar<br>Movie: Thunivu<br>Released: 2023<br>Music Director: M.Ghibran"
	,"Actor: Danush<br>Movie: Thiruchitrambalam<br>Released: 2022<br>Music Director: Anirudh"
	,"Actor: STR<br>Movie: VTK<br>Released: 2022<br>Music Director: A.R.Rahman"
	,"Actor: Pradeep Ranganathan<br>Movie: Love Today<br>Released: 2022<br>Music Director: U1"
	,"Actor: Danush<br>Movie: Thiruchitrambalam<br>Released: 2022<br>Music Director: Anirudh"
	,"Actor: Karthi<br>Movie: Viruman<br>Released: 2022<br>Music Director: U1"
	,"Actor: Vikram<br>Movie: Cobra<br>Released: 2022<br>Music Director: A.R.Rahman"
	,"Actor: Vijay<br>Movie: Varisu<br>Released: 2023<br>Music Director: S.Thaman"
];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jfif",
"images\\\\2.jfif",
"images\\\\3.jfif",
"images\\\\4.jfif",
"images\\\\5.jfif",
"images\\\\6.jfif",
"images\\\\7.jfif",
"images\\\\sd8.jfif",
"images\\\\8.jfif",
"images\\\\9.jfif",
"images\\\\10.jfif"
];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10","11"]];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}

function setmod(elem){
	mod=elem.value;
	if(!songrun){
			getTime();
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
