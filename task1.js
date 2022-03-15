//Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console


var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

//listener
xhr.onload=function(){
//server will return response of the data
if(xhr.status>=200 && xhr.status<300){
   // console.log(this.response);
//convert raw data in javascript notation format
var data=JSON.parse(xhr.response);
//console.log(data);
for(var i=0; i<data.length; i++){
    console.log(data[i].flag);
   
}
}else{
//you should print the error 
console.log("Data is not available");
}
}




//https://jsonformatter.org/

/*RESULTS
https://restcountries.eu/data/afg.svg
sketch.js:18 https://restcountries.eu/data/ala.svg
sketch.js:18 https://restcountries.eu/data/alb.svg
sketch.js:18 https://restcountries.eu/data/dza.svg
sketch.js:18 https://restcountries.eu/data/asm.svg
sketch.js:18 https://restcountries.eu/data/and.svg
sketch.js:18 https://restcountries.eu/data/ago.svg
sketch.js:18 https://restcountries.eu/data/aia.svg
sketch.js:18 https://restcountries.eu/data/ata.svg
sketch.js:18 https://restcountries.eu/data/atg.svg
sketch.js:18 https://restcountries.eu/data/arg.svg
sketch.js:18 https://restcountries.eu/data/arm.svg
sketch.js:18 https://restcountries.eu/data/abw.svg
sketch.js:18 https://restcountries.eu/data/aus.svg
sketch.js:18 https://restcountries.eu/data/aut.svg
sketch.js:18 https://restcountries.eu/data/aze.svg
sketch.js:18 https://restcountries.eu/data/bhs.svg
sketch.js:18 https://restcountries.eu/data/bhr.svg
sketch.js:18 https://restcountries.eu/data/bgd.svg
sketch.js:18 https://restcountries.eu/data/brb.svg
sketch.js:18 https://restcountries.eu/data/blr.svg
sketch.js:18 https://restcountries.eu/data/bel.svg
sketch.js:18 https://restcountries.eu/data/blz.svg
sketch.js:18 https://restcountries.eu/data/ben.svg
sketch.js:18 https://restcountries.eu/data/bmu.svg
sketch.js:18 https://restcountries.eu/data/btn.svg
sketch.js:18 https://restcountries.eu/data/bol.svg
sketch.js:18 https://restcountries.eu/data/bes.svg
sketch.js:18 https://restcountries.eu/data/bih.svg
sketch.js:18 https://restcountries.eu/data/bwa.svg
sketch.js:18 https://restcountries.eu/data/bvt.svg
sketch.js:18 https://restcountries.eu/data/bra.svg
sketch.js:18 https://restcountries.eu/data/iot.svg
sketch.js:18 https://restcountries.eu/data/umi.svg
sketch.js:18 https://restcountries.eu/data/vgb.svg
sketch.js:18 https://restcountries.eu/data/vir.svg
sketch.js:18 https://restcountries.eu/data/brn.svg
sketch.js:18 https://restcountries.eu/data/bgr.svg
sketch.js:18 https://restcountries.eu/data/bfa.svg
sketch.js:18 https://restcountries.eu/data/bdi.svg
sketch.js:18 https://restcountries.eu/data/khm.svg
sketch.js:18 https://restcountries.eu/data/cmr.svg
sketch.js:18 https://restcountries.eu/data/can.svg
sketch.js:18 https://restcountries.eu/data/cpv.svg
sketch.js:18 https://restcountries.eu/data/cym.svg
sketch.js:18 https://restcountries.eu/data/caf.svg
sketch.js:18 https://restcountries.eu/data/tcd.svg
sketch.js:18 https://restcountries.eu/data/chl.svg
sketch.js:18 https://restcountries.eu/data/chn.svg
sketch.js:18 https://restcountries.eu/data/cxr.svg
sketch.js:18 https://restcountries.eu/data/cck.svg
sketch.js:18 https://restcountries.eu/data/col.svg
sketch.js:18 https://restcountries.eu/data/com.svg
sketch.js:18 https://restcountries.eu/data/cog.svg
sketch.js:18 https://restcountries.eu/data/cod.svg
sketch.js:18 https://restcountries.eu/data/cok.svg
sketch.js:18 https://restcountries.eu/data/cri.svg
sketch.js:18 https://restcountries.eu/data/hrv.svg
sketch.js:18 https://restcountries.eu/data/cub.svg
sketch.js:18 https://restcountries.eu/data/cuw.svg
sketch.js:18 https://restcountries.eu/data/cyp.svg
sketch.js:18 https://restcountries.eu/data/cze.svg
sketch.js:18 https://restcountries.eu/data/dnk.svg
sketch.js:18 https://restcountries.eu/data/dji.svg
sketch.js:18 https://restcountries.eu/data/dma.svg
sketch.js:18 https://restcountries.eu/data/dom.svg
sketch.js:18 https://restcountries.eu/data/ecu.svg
sketch.js:18 https://restcountries.eu/data/egy.svg
sketch.js:18 https://restcountries.eu/data/slv.svg
sketch.js:18 https://restcountries.eu/data/gnq.svg
sketch.js:18 https://restcountries.eu/data/eri.svg
sketch.js:18 https://restcountries.eu/data/est.svg
sketch.js:18 https://restcountries.eu/data/eth.svg
sketch.js:18 https://restcountries.eu/data/flk.svg
sketch.js:18 https://restcountries.eu/data/fro.svg
sketch.js:18 https://restcountries.eu/data/fji.svg
sketch.js:18 https://restcountries.eu/data/fin.svg
sketch.js:18 https://restcountries.eu/data/fra.svg
sketch.js:18 https://restcountries.eu/data/guf.svg
sketch.js:18 https://restcountries.eu/data/pyf.svg
sketch.js:18 https://restcountries.eu/data/atf.svg
sketch.js:18 https://restcountries.eu/data/gab.svg
sketch.js:18 https://restcountries.eu/data/gmb.svg
sketch.js:18 https://restcountries.eu/data/geo.svg
sketch.js:18 https://restcountries.eu/data/deu.svg
sketch.js:18 https://restcountries.eu/data/gha.svg
sketch.js:18 https://restcountries.eu/data/gib.svg
sketch.js:18 https://restcountries.eu/data/grc.svg
sketch.js:18 https://restcountries.eu/data/grl.svg
sketch.js:18 https://restcountries.eu/data/grd.svg
sketch.js:18 https://restcountries.eu/data/glp.svg
sketch.js:18 https://restcountries.eu/data/gum.svg
sketch.js:18 https://restcountries.eu/data/gtm.svg
sketch.js:18 https://restcountries.eu/data/ggy.svg
sketch.js:18 https://restcountries.eu/data/gin.svg
sketch.js:18 https://restcountries.eu/data/gnb.svg
sketch.js:18 https://restcountries.eu/data/guy.svg
sketch.js:18 https://restcountries.eu/data/hti.svg
sketch.js:18 https://restcountries.eu/data/hmd.svg
sketch.js:18 https://restcountries.eu/data/vat.svg
sketch.js:18 https://restcountries.eu/data/hnd.svg
sketch.js:18 https://restcountries.eu/data/hkg.svg
sketch.js:18 https://restcountries.eu/data/hun.svg
sketch.js:18 https://restcountries.eu/data/isl.svg
sketch.js:18 https://restcountries.eu/data/ind.svg
sketch.js:18 https://restcountries.eu/data/idn.svg
sketch.js:18 https://restcountries.eu/data/civ.svg
sketch.js:18 https://restcountries.eu/data/irn.svg
sketch.js:18 https://restcountries.eu/data/irq.svg
sketch.js:18 https://restcountries.eu/data/irl.svg
sketch.js:18 https://restcountries.eu/data/imn.svg
sketch.js:18 https://restcountries.eu/data/isr.svg
sketch.js:18 https://restcountries.eu/data/ita.svg
sketch.js:18 https://restcountries.eu/data/jam.svg
sketch.js:18 https://restcountries.eu/data/jpn.svg
sketch.js:18 https://restcountries.eu/data/jey.svg
sketch.js:18 https://restcountries.eu/data/jor.svg
sketch.js:18 https://restcountries.eu/data/kaz.svg
sketch.js:18 https://restcountries.eu/data/ken.svg
sketch.js:18 https://restcountries.eu/data/kir.svg
sketch.js:18 https://restcountries.eu/data/kwt.svg
sketch.js:18 https://restcountries.eu/data/kgz.svg
sketch.js:18 https://restcountries.eu/data/lao.svg
sketch.js:18 https://restcountries.eu/data/lva.svg
sketch.js:18 https://restcountries.eu/data/lbn.svg
sketch.js:18 https://restcountries.eu/data/lso.svg
sketch.js:18 https://restcountries.eu/data/lbr.svg
sketch.js:18 https://restcountries.eu/data/lby.svg
sketch.js:18 https://restcountries.eu/data/lie.svg
sketch.js:18 https://restcountries.eu/data/ltu.svg
sketch.js:18 https://restcountries.eu/data/lux.svg
sketch.js:18 https://restcountries.eu/data/mac.svg
sketch.js:18 https://restcountries.eu/data/mkd.svg
sketch.js:18 https://restcountries.eu/data/mdg.svg
sketch.js:18 https://restcountries.eu/data/mwi.svg
sketch.js:18 https://restcountries.eu/data/mys.svg
sketch.js:18 https://restcountries.eu/data/mdv.svg
sketch.js:18 https://restcountries.eu/data/mli.svg
sketch.js:18 https://restcountries.eu/data/mlt.svg
sketch.js:18 https://restcountries.eu/data/mhl.svg
sketch.js:18 https://restcountries.eu/data/mtq.svg
sketch.js:18 https://restcountries.eu/data/mrt.svg
sketch.js:18 https://restcountries.eu/data/mus.svg
sketch.js:18 https://restcountries.eu/data/myt.svg
sketch.js:18 https://restcountries.eu/data/mex.svg
sketch.js:18 https://restcountries.eu/data/fsm.svg
sketch.js:18 https://restcountries.eu/data/mda.svg
sketch.js:18 https://restcountries.eu/data/mco.svg
sketch.js:18 https://restcountries.eu/data/mng.svg
sketch.js:18 https://restcountries.eu/data/mne.svg
sketch.js:18 https://restcountries.eu/data/msr.svg
sketch.js:18 https://restcountries.eu/data/mar.svg
sketch.js:18 https://restcountries.eu/data/moz.svg
sketch.js:18 https://restcountries.eu/data/mmr.svg
sketch.js:18 https://restcountries.eu/data/nam.svg
sketch.js:18 https://restcountries.eu/data/nru.svg
sketch.js:18 https://restcountries.eu/data/npl.svg
sketch.js:18 https://restcountries.eu/data/nld.svg
sketch.js:18 https://restcountries.eu/data/ncl.svg
sketch.js:18 https://restcountries.eu/data/nzl.svg
sketch.js:18 https://restcountries.eu/data/nic.svg
sketch.js:18 https://restcountries.eu/data/ner.svg
sketch.js:18 https://restcountries.eu/data/nga.svg
sketch.js:18 https://restcountries.eu/data/niu.svg
sketch.js:18 https://restcountries.eu/data/nfk.svg
sketch.js:18 https://restcountries.eu/data/prk.svg
sketch.js:18 https://restcountries.eu/data/mnp.svg
sketch.js:18 https://restcountries.eu/data/nor.svg
sketch.js:18 https://restcountries.eu/data/omn.svg
sketch.js:18 https://restcountries.eu/data/pak.svg
sketch.js:18 https://restcountries.eu/data/plw.svg
sketch.js:18 https://restcountries.eu/data/pse.svg
sketch.js:18 https://restcountries.eu/data/pan.svg
sketch.js:18 https://restcountries.eu/data/png.svg
sketch.js:18 https://restcountries.eu/data/pry.svg
sketch.js:18 https://restcountries.eu/data/per.svg
sketch.js:18 https://restcountries.eu/data/phl.svg
sketch.js:18 https://restcountries.eu/data/pcn.svg
sketch.js:18 https://restcountries.eu/data/pol.svg
sketch.js:18 https://restcountries.eu/data/prt.svg
sketch.js:18 https://restcountries.eu/data/pri.svg
sketch.js:18 https://restcountries.eu/data/qat.svg
sketch.js:18 https://restcountries.eu/data/kos.svg
sketch.js:18 https://restcountries.eu/data/reu.svg
sketch.js:18 https://restcountries.eu/data/rou.svg
sketch.js:18 https://restcountries.eu/data/rus.svg
sketch.js:18 https://restcountries.eu/data/rwa.svg
sketch.js:18 https://restcountries.eu/data/blm.svg
sketch.js:18 https://restcountries.eu/data/shn.svg
sketch.js:18 https://restcountries.eu/data/kna.svg
sketch.js:18 https://restcountries.eu/data/lca.svg
sketch.js:18 https://restcountries.eu/data/maf.svg
sketch.js:18 https://restcountries.eu/data/spm.svg
sketch.js:18 https://restcountries.eu/data/vct.svg
sketch.js:18 https://restcountries.eu/data/wsm.svg
sketch.js:18 https://restcountries.eu/data/smr.svg
sketch.js:18 https://restcountries.eu/data/stp.svg
sketch.js:18 https://restcountries.eu/data/sau.svg
sketch.js:18 https://restcountries.eu/data/sen.svg
sketch.js:18 https://restcountries.eu/data/srb.svg
sketch.js:18 https://restcountries.eu/data/syc.svg
sketch.js:18 https://restcountries.eu/data/sle.svg
sketch.js:18 https://restcountries.eu/data/sgp.svg
sketch.js:18 https://restcountries.eu/data/sxm.svg
sketch.js:18 https://restcountries.eu/data/svk.svg
sketch.js:18 https://restcountries.eu/data/svn.svg
sketch.js:18 https://restcountries.eu/data/slb.svg
sketch.js:18 https://restcountries.eu/data/som.svg
sketch.js:18 https://restcountries.eu/data/zaf.svg
sketch.js:18 https://restcountries.eu/data/sgs.svg
sketch.js:18 https://restcountries.eu/data/kor.svg
sketch.js:18 https://restcountries.eu/data/ssd.svg
sketch.js:18 https://restcountries.eu/data/esp.svg
sketch.js:18 https://restcountries.eu/data/lka.svg
sketch.js:18 https://restcountries.eu/data/sdn.svg
sketch.js:18 https://restcountries.eu/data/sur.svg
sketch.js:18 https://restcountries.eu/data/sjm.svg
sketch.js:18 https://restcountries.eu/data/swz.svg
sketch.js:18 https://restcountries.eu/data/swe.svg
sketch.js:18 https://restcountries.eu/data/che.svg
sketch.js:18 https://restcountries.eu/data/syr.svg
sketch.js:18 https://restcountries.eu/data/twn.svg
sketch.js:18 https://restcountries.eu/data/tjk.svg
sketch.js:18 https://restcountries.eu/data/tza.svg
sketch.js:18 https://restcountries.eu/data/tha.svg
sketch.js:18 https://restcountries.eu/data/tls.svg
sketch.js:18 https://restcountries.eu/data/tgo.svg
sketch.js:18 https://restcountries.eu/data/tkl.svg
sketch.js:18 https://restcountries.eu/data/ton.svg
sketch.js:18 https://restcountries.eu/data/tto.svg
sketch.js:18 https://restcountries.eu/data/tun.svg
sketch.js:18 https://restcountries.eu/data/tur.svg
sketch.js:18 https://restcountries.eu/data/tkm.svg
sketch.js:18 https://restcountries.eu/data/tca.svg
sketch.js:18 https://restcountries.eu/data/tuv.svg
sketch.js:18 https://restcountries.eu/data/uga.svg
sketch.js:18 https://restcountries.eu/data/ukr.svg
sketch.js:18 https://restcountries.eu/data/are.svg
sketch.js:18 https://restcountries.eu/data/gbr.svg
sketch.js:18 https://restcountries.eu/data/usa.svg
sketch.js:18 https://restcountries.eu/data/ury.svg
sketch.js:18 https://restcountries.eu/data/uzb.svg
sketch.js:18 https://restcountries.eu/data/vut.svg
sketch.js:18 https://restcountries.eu/data/ven.svg
sketch.js:18 https://restcountries.eu/data/vnm.svg
sketch.js:18 https://restcountries.eu/data/wlf.svg
sketch.js:18 https://restcountries.eu/data/esh.svg
sketch.js:18 https://restcountries.eu/data/yem.svg
sketch.js:18 https://restcountries.eu/data/zmb.svg
sketch.js:18 https://restcountries.eu/data/zwe.svg
*/