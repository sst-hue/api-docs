import{_ as e,c as t,o as a,a as i}from"./app.8e21f956.js";const g=JSON.parse('{"title":"Class: HumanoidV2Shape","description":"","frontmatter":{},"headers":[{"level":2,"title":"Implements","slug":"implements","link":"#implements","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"getBreastHorizontalPosition","slug":"getbreasthorizontalposition","link":"#getbreasthorizontalposition","children":[]},{"level":3,"title":"getBreastLength","slug":"getbreastlength","link":"#getbreastlength","children":[]},{"level":3,"title":"getBreastScale","slug":"getbreastscale","link":"#getbreastscale","children":[]},{"level":3,"title":"getBreastStretch","slug":"getbreaststretch","link":"#getbreaststretch","children":[]},{"level":3,"title":"getBreastVerticalPosition","slug":"getbreastverticalposition","link":"#getbreastverticalposition","children":[]},{"level":3,"title":"getBrowGap","slug":"getbrowgap","link":"#getbrowgap","children":[]},{"level":3,"title":"getBrowHeight","slug":"getbrowheight","link":"#getbrowheight","children":[]},{"level":3,"title":"getBrowInboardShape","slug":"getbrowinboardshape","link":"#getbrowinboardshape","children":[]},{"level":3,"title":"getBrowOutsideShape","slug":"getbrowoutsideshape","link":"#getbrowoutsideshape","children":[]},{"level":3,"title":"getBrowRotation","slug":"getbrowrotation","link":"#getbrowrotation","children":[]},{"level":3,"title":"getCanthusHorizontalPosition","slug":"getcanthushorizontalposition","link":"#getcanthushorizontalposition","children":[]},{"level":3,"title":"getCanthusVerticalPosition","slug":"getcanthusverticalposition","link":"#getcanthusverticalposition","children":[]},{"level":3,"title":"getCharacterHeight","slug":"getcharacterheight","link":"#getcharacterheight","children":[]},{"level":3,"title":"getCheekBoneRange","slug":"getcheekbonerange","link":"#getcheekbonerange","children":[]},{"level":3,"title":"getCheekBoneWidth","slug":"getcheekbonewidth","link":"#getcheekbonewidth","children":[]},{"level":3,"title":"getCheekHeight","slug":"getcheekheight","link":"#getcheekheight","children":[]},{"level":3,"title":"getCheekRange","slug":"getcheekrange","link":"#getcheekrange","children":[]},{"level":3,"title":"getCheekWidth","slug":"getcheekwidth","link":"#getcheekwidth","children":[]},{"level":3,"title":"getEarRoll","slug":"getearroll","link":"#getearroll","children":[]},{"level":3,"title":"getEarScale","slug":"getearscale","link":"#getearscale","children":[]},{"level":3,"title":"getEarYaw","slug":"getearyaw","link":"#getearyaw","children":[]},{"level":3,"title":"getEyesGap","slug":"geteyesgap","link":"#geteyesgap","children":[]},{"level":3,"title":"getEyesHeight","slug":"geteyesheight","link":"#geteyesheight","children":[]},{"level":3,"title":"getEyesLength","slug":"geteyeslength","link":"#geteyeslength","children":[]},{"level":3,"title":"getEyesRange","slug":"geteyesrange","link":"#geteyesrange","children":[]},{"level":3,"title":"getEyesRotation","slug":"geteyesrotation","link":"#geteyesrotation","children":[]},{"level":3,"title":"getEyesWidth","slug":"geteyeswidth","link":"#geteyeswidth","children":[]},{"level":3,"title":"getFaceWidth","slug":"getfacewidth","link":"#getfacewidth","children":[]},{"level":3,"title":"getGroinThickness","slug":"getgrointhickness","link":"#getgrointhickness","children":[]},{"level":3,"title":"getGroinWidth","slug":"getgroinwidth","link":"#getgroinwidth","children":[]},{"level":3,"title":"getHeadScale","slug":"getheadscale","link":"#getheadscale","children":[]},{"level":3,"title":"getJawLength","slug":"getjawlength","link":"#getjawlength","children":[]},{"level":3,"title":"getJawRange","slug":"getjawrange","link":"#getjawrange","children":[]},{"level":3,"title":"getJawSmooth","slug":"getjawsmooth","link":"#getjawsmooth","children":[]},{"level":3,"title":"getJawVertexHeight","slug":"getjawvertexheight","link":"#getjawvertexheight","children":[]},{"level":3,"title":"getJawVertexRange","slug":"getjawvertexrange","link":"#getjawvertexrange","children":[]},{"level":3,"title":"getJawVertexWidth","slug":"getjawvertexwidth","link":"#getjawvertexwidth","children":[]},{"level":3,"title":"getLowerArmsStretch","slug":"getlowerarmsstretch","link":"#getlowerarmsstretch","children":[]},{"level":3,"title":"getLowerArmsThickness","slug":"getlowerarmsthickness","link":"#getlowerarmsthickness","children":[]},{"level":3,"title":"getLowerArmsWidth","slug":"getlowerarmswidth","link":"#getlowerarmswidth","children":[]},{"level":3,"title":"getLowerFaceRange","slug":"getlowerfacerange","link":"#getlowerfacerange","children":[]},{"level":3,"title":"getLowerFaceWidth","slug":"getlowerfacewidth","link":"#getlowerfacewidth","children":[]},{"level":3,"title":"getLowerJawRange","slug":"getlowerjawrange","link":"#getlowerjawrange","children":[]},{"level":3,"title":"getLowerJawWidth","slug":"getlowerjawwidth","link":"#getlowerjawwidth","children":[]},{"level":3,"title":"getLowerMouthThickness","slug":"getlowermouththickness","link":"#getlowermouththickness","children":[]},{"level":3,"title":"getLowerStretch","slug":"getlowerstretch","link":"#getlowerstretch","children":[]},{"level":3,"title":"getMouthHeight","slug":"getmouthheight","link":"#getmouthheight","children":[]},{"level":3,"title":"getMouthRange","slug":"getmouthrange","link":"#getmouthrange","children":[]},{"level":3,"title":"getMouthShape","slug":"getmouthshape","link":"#getmouthshape","children":[]},{"level":3,"title":"getMouthWidth","slug":"getmouthwidth","link":"#getmouthwidth","children":[]},{"level":3,"title":"getNeckStretch","slug":"getneckstretch","link":"#getneckstretch","children":[]},{"level":3,"title":"getNeckThickness","slug":"getneckthickness","link":"#getneckthickness","children":[]},{"level":3,"title":"getNeckWidth","slug":"getneckwidth","link":"#getneckwidth","children":[]},{"level":3,"title":"getNoseHeight","slug":"getnoseheight","link":"#getnoseheight","children":[]},{"level":3,"title":"getNoseProtrusion","slug":"getnoseprotrusion","link":"#getnoseprotrusion","children":[]},{"level":3,"title":"getNoseVerticalPosition","slug":"getnoseverticalposition","link":"#getnoseverticalposition","children":[]},{"level":3,"title":"getPupilHeight","slug":"getpupilheight","link":"#getpupilheight","children":[]},{"level":3,"title":"getPupilHorizontalPosition","slug":"getpupilhorizontalposition","link":"#getpupilhorizontalposition","children":[]},{"level":3,"title":"getPupilVerticalPosition","slug":"getpupilverticalposition","link":"#getpupilverticalposition","children":[]},{"level":3,"title":"getPupilWidth","slug":"getpupilwidth","link":"#getpupilwidth","children":[]},{"level":3,"title":"getRibThickness","slug":"getribthickness","link":"#getribthickness","children":[]},{"level":3,"title":"getRibWidth","slug":"getribwidth","link":"#getribwidth","children":[]},{"level":3,"title":"getShankScaleX","slug":"getshankscalex","link":"#getshankscalex","children":[]},{"level":3,"title":"getShankScaleZ","slug":"getshankscalez","link":"#getshankscalez","children":[]},{"level":3,"title":"getShankStretch","slug":"getshankstretch","link":"#getshankstretch","children":[]},{"level":3,"title":"getShoulderArmThickness","slug":"getshoulderarmthickness","link":"#getshoulderarmthickness","children":[]},{"level":3,"title":"getShoulderArmWidth","slug":"getshoulderarmwidth","link":"#getshoulderarmwidth","children":[]},{"level":3,"title":"getShoulderThickness","slug":"getshoulderthickness","link":"#getshoulderthickness","children":[]},{"level":3,"title":"getShoulderWidth","slug":"getshoulderwidth","link":"#getshoulderwidth","children":[]},{"level":3,"title":"getThighStretch","slug":"getthighstretch","link":"#getthighstretch","children":[]},{"level":3,"title":"getThighThicknessX","slug":"getthighthicknessx","link":"#getthighthicknessx","children":[]},{"level":3,"title":"getThighThicknessZ","slug":"getthighthicknessz","link":"#getthighthicknessz","children":[]},{"level":3,"title":"getUpperArmsStretch","slug":"getupperarmsstretch","link":"#getupperarmsstretch","children":[]},{"level":3,"title":"getUpperArmsThickness","slug":"getupperarmsthickness","link":"#getupperarmsthickness","children":[]},{"level":3,"title":"getUpperArmsWidth","slug":"getupperarmswidth","link":"#getupperarmswidth","children":[]},{"level":3,"title":"getUpperFaceRange","slug":"getupperfacerange","link":"#getupperfacerange","children":[]},{"level":3,"title":"getUpperMouthThickness","slug":"getuppermouththickness","link":"#getuppermouththickness","children":[]},{"level":3,"title":"getUpperStretch","slug":"getupperstretch","link":"#getupperstretch","children":[]},{"level":3,"title":"getWaistStretch","slug":"getwaiststretch","link":"#getwaiststretch","children":[]},{"level":3,"title":"getWaistThickness","slug":"getwaistthickness","link":"#getwaistthickness","children":[]},{"level":3,"title":"getWaistWidth","slug":"getwaistwidth","link":"#getwaistwidth","children":[]},{"level":3,"title":"setBreastHorizontalPosition","slug":"setbreasthorizontalposition","link":"#setbreasthorizontalposition","children":[]},{"level":3,"title":"setBreastLength","slug":"setbreastlength","link":"#setbreastlength","children":[]},{"level":3,"title":"setBreastScale","slug":"setbreastscale","link":"#setbreastscale","children":[]},{"level":3,"title":"setBreastStretch","slug":"setbreaststretch","link":"#setbreaststretch","children":[]},{"level":3,"title":"setBreastVerticalPosition","slug":"setbreastverticalposition","link":"#setbreastverticalposition","children":[]},{"level":3,"title":"setBrowGap","slug":"setbrowgap","link":"#setbrowgap","children":[]},{"level":3,"title":"setBrowHeight","slug":"setbrowheight","link":"#setbrowheight","children":[]},{"level":3,"title":"setBrowInboardShape","slug":"setbrowinboardshape","link":"#setbrowinboardshape","children":[]},{"level":3,"title":"setBrowOutsideShape","slug":"setbrowoutsideshape","link":"#setbrowoutsideshape","children":[]},{"level":3,"title":"setBrowRotation","slug":"setbrowrotation","link":"#setbrowrotation","children":[]},{"level":3,"title":"setCanthusHorizontalPosition","slug":"setcanthushorizontalposition","link":"#setcanthushorizontalposition","children":[]},{"level":3,"title":"setCanthusVerticalPosition","slug":"setcanthusverticalposition","link":"#setcanthusverticalposition","children":[]},{"level":3,"title":"setCharacterHeight","slug":"setcharacterheight","link":"#setcharacterheight","children":[]},{"level":3,"title":"setCheekBoneRange","slug":"setcheekbonerange","link":"#setcheekbonerange","children":[]},{"level":3,"title":"setCheekBoneWidth","slug":"setcheekbonewidth","link":"#setcheekbonewidth","children":[]},{"level":3,"title":"setCheekHeight","slug":"setcheekheight","link":"#setcheekheight","children":[]},{"level":3,"title":"setCheekRange","slug":"setcheekrange","link":"#setcheekrange","children":[]},{"level":3,"title":"setCheekWidth","slug":"setcheekwidth","link":"#setcheekwidth","children":[]},{"level":3,"title":"setEarRoll","slug":"setearroll","link":"#setearroll","children":[]},{"level":3,"title":"setEarScale","slug":"setearscale","link":"#setearscale","children":[]},{"level":3,"title":"setEarYaw","slug":"setearyaw","link":"#setearyaw","children":[]},{"level":3,"title":"setEyesGap","slug":"seteyesgap","link":"#seteyesgap","children":[]},{"level":3,"title":"setEyesHeight","slug":"seteyesheight","link":"#seteyesheight","children":[]},{"level":3,"title":"setEyesLength","slug":"seteyeslength","link":"#seteyeslength","children":[]},{"level":3,"title":"setEyesRange","slug":"seteyesrange","link":"#seteyesrange","children":[]},{"level":3,"title":"setEyesRotation","slug":"seteyesrotation","link":"#seteyesrotation","children":[]},{"level":3,"title":"setEyesWidth","slug":"seteyeswidth","link":"#seteyeswidth","children":[]},{"level":3,"title":"setFaceWidth","slug":"setfacewidth","link":"#setfacewidth","children":[]},{"level":3,"title":"setGroinThickness","slug":"setgrointhickness","link":"#setgrointhickness","children":[]},{"level":3,"title":"setGroinWidth","slug":"setgroinwidth","link":"#setgroinwidth","children":[]},{"level":3,"title":"setHeadScale","slug":"setheadscale","link":"#setheadscale","children":[]},{"level":3,"title":"setJawLength","slug":"setjawlength","link":"#setjawlength","children":[]},{"level":3,"title":"setJawRange","slug":"setjawrange","link":"#setjawrange","children":[]},{"level":3,"title":"setJawSmooth","slug":"setjawsmooth","link":"#setjawsmooth","children":[]},{"level":3,"title":"setJawVertexHeight","slug":"setjawvertexheight","link":"#setjawvertexheight","children":[]},{"level":3,"title":"setJawVertexRange","slug":"setjawvertexrange","link":"#setjawvertexrange","children":[]},{"level":3,"title":"setJawVertexWidth","slug":"setjawvertexwidth","link":"#setjawvertexwidth","children":[]},{"level":3,"title":"setLowerArmsStretch","slug":"setlowerarmsstretch","link":"#setlowerarmsstretch","children":[]},{"level":3,"title":"setLowerArmsThickness","slug":"setlowerarmsthickness","link":"#setlowerarmsthickness","children":[]},{"level":3,"title":"setLowerArmsWidth","slug":"setlowerarmswidth","link":"#setlowerarmswidth","children":[]},{"level":3,"title":"setLowerFaceRange","slug":"setlowerfacerange","link":"#setlowerfacerange","children":[]},{"level":3,"title":"setLowerFaceWidth","slug":"setlowerfacewidth","link":"#setlowerfacewidth","children":[]},{"level":3,"title":"setLowerJawRange","slug":"setlowerjawrange","link":"#setlowerjawrange","children":[]},{"level":3,"title":"setLowerJawWidth","slug":"setlowerjawwidth","link":"#setlowerjawwidth","children":[]},{"level":3,"title":"setLowerMouthThickness","slug":"setlowermouththickness","link":"#setlowermouththickness","children":[]},{"level":3,"title":"setLowerStretch","slug":"setlowerstretch","link":"#setlowerstretch","children":[]},{"level":3,"title":"setMouthHeight","slug":"setmouthheight","link":"#setmouthheight","children":[]},{"level":3,"title":"setMouthRange","slug":"setmouthrange","link":"#setmouthrange","children":[]},{"level":3,"title":"setMouthShape","slug":"setmouthshape","link":"#setmouthshape","children":[]},{"level":3,"title":"setMouthWidth","slug":"setmouthwidth","link":"#setmouthwidth","children":[]},{"level":3,"title":"setNeckStretch","slug":"setneckstretch","link":"#setneckstretch","children":[]},{"level":3,"title":"setNeckThickness","slug":"setneckthickness","link":"#setneckthickness","children":[]},{"level":3,"title":"setNeckWidth","slug":"setneckwidth","link":"#setneckwidth","children":[]},{"level":3,"title":"setNoseHeight","slug":"setnoseheight","link":"#setnoseheight","children":[]},{"level":3,"title":"setNoseProtrusion","slug":"setnoseprotrusion","link":"#setnoseprotrusion","children":[]},{"level":3,"title":"setNoseVerticalPosition","slug":"setnoseverticalposition","link":"#setnoseverticalposition","children":[]},{"level":3,"title":"setPupilHeight","slug":"setpupilheight","link":"#setpupilheight","children":[]},{"level":3,"title":"setPupilHorizontalPosition","slug":"setpupilhorizontalposition","link":"#setpupilhorizontalposition","children":[]},{"level":3,"title":"setPupilVerticalPosition","slug":"setpupilverticalposition","link":"#setpupilverticalposition","children":[]},{"level":3,"title":"setPupilWidth","slug":"setpupilwidth","link":"#setpupilwidth","children":[]},{"level":3,"title":"setRibThickness","slug":"setribthickness","link":"#setribthickness","children":[]},{"level":3,"title":"setRibWidth","slug":"setribwidth","link":"#setribwidth","children":[]},{"level":3,"title":"setShankScaleX","slug":"setshankscalex","link":"#setshankscalex","children":[]},{"level":3,"title":"setShankScaleZ","slug":"setshankscalez","link":"#setshankscalez","children":[]},{"level":3,"title":"setShankStretch","slug":"setshankstretch","link":"#setshankstretch","children":[]},{"level":3,"title":"setShoulderArmThickness","slug":"setshoulderarmthickness","link":"#setshoulderarmthickness","children":[]},{"level":3,"title":"setShoulderArmWidth","slug":"setshoulderarmwidth","link":"#setshoulderarmwidth","children":[]},{"level":3,"title":"setShoulderThickness","slug":"setshoulderthickness","link":"#setshoulderthickness","children":[]},{"level":3,"title":"setShoulderWidth","slug":"setshoulderwidth","link":"#setshoulderwidth","children":[]},{"level":3,"title":"setThighStretch","slug":"setthighstretch","link":"#setthighstretch","children":[]},{"level":3,"title":"setThighThicknessX","slug":"setthighthicknessx","link":"#setthighthicknessx","children":[]},{"level":3,"title":"setThighThicknessZ","slug":"setthighthicknessz","link":"#setthighthicknessz","children":[]},{"level":3,"title":"setUpperArmsStretch","slug":"setupperarmsstretch","link":"#setupperarmsstretch","children":[]},{"level":3,"title":"setUpperArmsThickness","slug":"setupperarmsthickness","link":"#setupperarmsthickness","children":[]},{"level":3,"title":"setUpperArmsWidth","slug":"setupperarmswidth","link":"#setupperarmswidth","children":[]},{"level":3,"title":"setUpperFaceRange","slug":"setupperfacerange","link":"#setupperfacerange","children":[]},{"level":3,"title":"setUpperMouthThickness","slug":"setuppermouththickness","link":"#setuppermouththickness","children":[]},{"level":3,"title":"setUpperStretch","slug":"setupperstretch","link":"#setupperstretch","children":[]},{"level":3,"title":"setWaistStretch","slug":"setwaiststretch","link":"#setwaiststretch","children":[]},{"level":3,"title":"setWaistThickness","slug":"setwaistthickness","link":"#setwaistthickness","children":[]},{"level":3,"title":"setWaistWidth","slug":"setwaistwidth","link":"#setwaistwidth","children":[]}]}],"relativePath":"classes/Gameplay.Gameplay.HumanoidV2Shape.md"}'),d={name:"classes/Gameplay.Gameplay.HumanoidV2Shape.md"},r=i("",2450),n=[r];function h(s,l,o,p,c,m){return a(),t("div",null,n)}const u=e(d,[["render",h]]);export{g as __pageData,u as default};
