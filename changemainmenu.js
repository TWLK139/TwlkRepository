var fourdivs=document.getElementsByClassName("fourdivs");
var F_FDiv=document.getElementById("fourdivsfa");
var SerialsDF=document.getElementsByClassName("Serials");
var theDegree=0;
var divsTransformSI;
var SDFIndex=0;
function auto(){
	divsTransformSI=setInterval(
		function(){
			theDegree=theDegree-0.02;
			// console.log(theDegree);
			for (SDFIndex=0;SDFIndex<fourdivs.length;SDFIndex++) {
				fourdivs[SDFIndex].style.transform="rotate3d(0,1,0,"+(theDegree+(SDFIndex*90))+"deg)";
			}
			if(theDegree<=-360){
				theDegree=0;
			}
		},1
	)
}
auto();
function SDChange(){
	if((theDegree>=-45&&theDegree<=0)||(theDegree<-315&&theDegree>=-360)){
		SerialsDF[0].style.opacity="1";
		SerialsDF[1].style.opacity="";
		SerialsDF[2].style.opacity="";
		SerialsDF[3].style.opacity="";
	}else if(theDegree>=-135&&theDegree<-45){
		SerialsDF[0].style.opacity="";
		SerialsDF[1].style.opacity="1";
		SerialsDF[2].style.opacity="";
		SerialsDF[3].style.opacity="";
	}else if(theDegree>=-225&&theDegree<-135){
		SerialsDF[0].style.opacity="";
		SerialsDF[1].style.opacity="";
		SerialsDF[2].style.opacity="1";
		SerialsDF[3].style.opacity="";
	}else if(theDegree>=-315&&theDegree<-225){
		SerialsDF[0].style.opacity="";
		SerialsDF[1].style.opacity="";
		SerialsDF[2].style.opacity="";
		SerialsDF[3].style.opacity="1";
	}
}
F_FDiv.onmouseover=function(){
	clearInterval(divsTransformSI);
	SDChange();
}
F_FDiv.onmouseout=function(){
	auto();
}
for (i=0;i<SerialsDF.length;i++) {
	SerialsDF[i].SDF_index=i;
	SerialsDF[i].onclick=function(){
		SDFIndex=this.SDF_index;
		for (j=0;j<fourdivs.length;j++) {
			fourdivs[j].style.transform="rotate3d(0,1,0,"+(j*90)+"deg)";
			fourdivs[SDFIndex].style.transform="rotate3d(0,1,0,0deg)";
			fourdivs[0].style.transform="rotate3d(0,1,0,"+(SDFIndex*90)+"deg)";
			theDegree=SDFIndex*(-90);
		}
		SDChange();
	}
}