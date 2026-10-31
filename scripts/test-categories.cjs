const assert=require('node:assert/strict');require('../site/categories.js');
const {topic,classify}=global.PowerPointCategories;
const cases=[
 ['Physics','Electrical Circuits','Electricity & magnetism'],
 ['Physics','HEATING AND COOLING','Heat & thermal physics'],
 ['Physics','Ionising radiation and nuclear reactions','Nuclear & modern physics'],
 ['Chemistry','10 AECHE Alkenes','Organic chemistry'],
 ['Chemistry','Intermolecular forces','Atomic structure & bonding'],
 ['Chemistry','Stoichiometry','Chemical calculations & equilibrium'],
 ['Chemistry','Reaction rates','Chemical calculations & equilibrium'],
 ['Human Biology','37 Meiosis','Genetics & reproduction'],
 ['Human Biology','The Circulatory System','Body systems & health'],
 ['Biology','Mitosis','Genetics & reproduction'],
 ['Earth and Space Science','Life Cycle of Stars','Space & astronomy'],
 ['Psychology','Attachment Theory','Psychology: social behaviour'],
 ['Psychology','Skinner’s Box','Psychology: learning & memory'],
 ['Psychology','Piaget’s Theory of Cognitive Development','Psychology: development'],
 ['Physics','Page Setup','General & other resources'],
 ['Mathematics','Linear equation word problems','Equations & inequalities'],
 ['Mathematics','Reflections and rotations','Geometry & transformations'],
 ['Mathematics','Compound shapes','Geometry & transformations'],
 ['Mathematics','Relative Frequency','Probability'],
 ['Mathematics','Sample spaces','Probability'],
 ['Mathematics','Factorising by Grouping in Pairs','Algebraic techniques & patterns'],
 ['Mathematics','Conditional Probability','Probability'],
 ['Mathematics','Converting Fractions, Decimals and Percentages','Fractions, decimals & percentages'],
 ['Mathematics','Bivariate Data Analysis','Statistics & data'],
 ['Mathematics','Exponential and logarithmic functions','Indices, surds & logarithms'],
 ['Mathematics','Area of a Trapezium','Measurement'],
 ['Mathematics','Two Way Tables','Probability'],
 ['Mathematics','Circle revision','Geometry & transformations'],
 ['Mathematics','Units of measurement','Measurement'],
 ['Mathematics','Unit 3','General & other resources'],
 ['HASS','Separation of powers','Civics & citizenship'],
 ['HASS','Economic growth and development','Economics & business'],
 ['HASS','Ancient Rome','History: ancient civilisations'],
 ['HASS','Living conditions in the middle ages','History: medieval & modern worlds'],
 ['HASS','Earthquakes','Geography: landscapes & natural hazards'],
 ['HPE','Online Safety','Safety & healthy choices'],
 ['HPE','Contraception and STIs','Health, identity & relationships'],
 ['HPE','Fitness training','Movement & physical activity'],
 ['English','Atomic structure and equations','General & other resources'],
 ['Science','Fair Tests','Scientific inquiry & lab skills']
];
for(const [subject,title,expected] of cases){const item={subject,title,topic:'Narrogin',years:[11]};const before=JSON.stringify(item);assert.equal(topic(item),expected,subject+': '+title);assert.equal(JSON.stringify(item),before,'source mutated');}
// Real ambiguous titles must be interpreted within their subject and source context.
assert.equal(topic({subject:'HASS',title:'Pressures on water supply?',topic:'Narrogin / Geography / 2023'}),'Geography: environments & resources');
for(const title of ['Cell Phones','Absorption'])assert.equal(classify({subject:'Physics',years:[9],title}).strand,'Physical Sciences',title);
assert.equal(classify({subject:'Physics',years:[9],title:'01ECOLOGY'}).strand,'Biological Sciences');
for(const subject of ['Chemistry','Physics','Biology','Human Biology','Earth and Space Science']){
 const q={subject,years:[8],title:'Electricity and circuits',id:'unchanged',url:'https://example.com/p.pptx'};const before=JSON.stringify(q);assert.equal(classify(q).subject,'Science');assert.equal(JSON.stringify(q),before);
 assert.equal(classify({...q,years:[12]}).subject,subject,'senior course must remain separate');
}
const fileTopic=topic({subject:'Mathematics',title:'Learning Intentions',sourcePath:'resources/Secondary/Mathematics/Year 08/Geometry/Reflections.pptx'});assert.equal(fileTopic,'Geometry & transformations');
const allTitle=['equations','reflection','compound shapes','relative frequency','sample spaces','conditional probability','plant population','skin','economic development','starters'];
for(const subject of ['Mathematics','HASS','HPE','English'])for(const title of allTitle){const label=topic({subject,title});assert.doesNotMatch(label,/Atomic|Chemical|Organic|Nuclear|Waves, light|Matter, mixtures|Psychology|Scientific inquiry/);}
// Optional audit of the published catalogue without committing a copy of user resources.
if(process.argv[2]){
 const rows=require(require('node:path').resolve(process.argv[2])).resources;let count=0;
 for(const row of rows){const before=JSON.stringify(row),c=classify(row);assert.equal(JSON.stringify(row),before,row.id);assert.ok(c.topic&&c.strand&&c.subject,row.id);if(['Mathematics','HASS','HPE'].includes(row.subject))assert.doesNotMatch(c.topic,/Atomic|Chemical|Organic|Nuclear|Waves, light|Matter, mixtures|Psychology|Scientific inquiry/,row.title);count++;}
 console.log('Audited '+count+' current catalogue entries; source metadata preserved and no cross-subject science labels.');
}
console.log(cases.length+' category regressions plus subject-isolation and preservation checks passed.');
