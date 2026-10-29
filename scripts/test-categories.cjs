const assert=require('node:assert/strict');require('../site/categories.js');const topic=global.PowerPointCategories.topic;
for(const [subject,title,expected] of [
 ['Physics','Electrical Circuits','Electricity & magnetism'],
 ['Physics','HEATING AND COOLING','Heat & thermal physics'],
 ['Physics','Ionising radiation and nuclear reactions','Nuclear & modern physics'],
 ['Chemistry','10 AECHE Alkenes','Organic chemistry'],
 ['Chemistry','Intermolecular forces','Atomic structure & bonding'],
 ['Chemistry','Stoichiometry','Chemical calculations & equilibrium'],
 ['Human Biology','37 Meiosis','Genetics & reproduction'],
 ['Human Biology','The Circulatory System','Body systems & health'],
 ['Biology','Mitosis','Genetics & reproduction'],
 ['Earth and Space Science','Life Cycle of Stars','Space & astronomy'],
 ['Psychology','Attachment Theory','Psychology: social behaviour'],
 ['Physics','Page Setup','General & other resources']]){const item={subject,title,topic:'Narrogin'},before=JSON.stringify(item);assert.equal(topic(item),expected,title);assert.equal(JSON.stringify(item),before);}
console.log('12 category and source-preservation checks passed.');
