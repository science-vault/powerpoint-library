/* Display taxonomy only. Original subject, source paths and files are retained. */
(function(root){'use strict';
 const rules=[
 ['Revision & assessment',/\brevision\b|\breview\b|\bexam\b|\btest\b|\bquiz\b|\bassessment\b/i],
 ['Scientific inquiry & lab skills',/scientific method|scientifically|variables|hypothes|observations|inferences|graphing|interpreting graphs|safety|branches of science|what is science|investigat|measurement|laboratory|lab equipment/i],
 ['Genetics & reproduction',/\bdna\b|\brna\b|genetic|inherit|chromosom|allele|mitosis|meiosis|reproduc|fertilis|pregnan|embryo|development|stem cell|spermatogen|oogen|contracept|gene expression|d na/i],
 ['Cells & biological molecules',/\bcell|tissue|microscop|organelle|diffusion|osmosis|transport across|membrane|metaboli|biological molecule|protein synthesis|enzyme|biochem|photosynth|respiration|life processes/i],
 ['Evolution & adaptations',/evolut|adaptat|natural selection|speciation|darwin|fossil evidence|human ancestor|homin|primate/i],
 ['Ecosystems & biodiversity',/ecolog|ecosystem|habitat|food chain|food web|biotic|abiotic|biodiversity|classification|classifying.*living|introduced species|cane toad|population|organisms|living things|animal|plant/i],
 ['Coordination & homeostasis',/nerv|neuron|brain|reflex|reaction time|endocrine|hormone|homeostas|thermoreg|integument|skin/i],
 ['Immunity & disease',/immun|lymph|disease|pathogen|infect|\bstis?\b|sexually transmitted|vaccin|antibod|bacteria|virus/i],
 ['Body systems & health',/heart|blood|cardiac|cardiovasc|circulat|respiratory|breathing|digest|nutrition|excret|urinary|kidney|gas exchange|absorption|elimination|removal of waste|joint|skelet|muscl|movement|health/i],
 ['Atomic structure & bonding',/atomic|\batom|\bion|isotop|electron|periodic|element|molecule|compound|bonding|molecular shape|intermolecular|polarity|dipole|metallic|covalent|formula/i],
 ['Chemical reactions & acids',/reaction|acid|base\b|\bph\b|neutralis|oxidation|reduction|redox|corrosion|electrochem|electrolys|equation|combustion|precipitat|solubility/i],
 ['Chemical calculations & equilibrium',/\bmole\b|\bmoles\b|stoichi|equilibrium|concentration|titration|volumetric|chemical calculation|percentage composition|calibration|enthalpy|thermochem|activation energy|rate.*reaction/i],
 ['Organic chemistry',/organic|hydrocarbon|alkane|alkene|alcohol|ester|polymer|functional group|isomer|aromatic|fuel/i],
 ['Matter, mixtures & separation',/matter|particle|solid|liquid|gas\b|mixture|separat|filtrat|distillat|chromatograph|solution|dissolv|density|boil|melting|evaporat|physical propert|chemical propert|kinetic theory|gas law|solvent|water|material|nano|changing states/i],
 ['Nuclear & modern physics',/nuclear|radioactiv|ionising|quantum|photon|photoelectric|particle physics|standard model|relativ|time dilation|length contraction|mass.energy|black.body|spectra|wave.particle|matter as a wave|light as a particle|cosmolog|particle accelerator|particle interaction/i],
 ['Electricity & magnetism',/electric|\bdc motor|generator|transformer|applications of em|circuit|current|voltage|resistor|resistance|ohm|magnet|electromagnet|induction|charge|static/i],
 ['Motion, forces & energy',/motion|force|newton|velocity|speed|accelerat|momentum|projectile|displacement|dist.*time|disp.*time|friction|gravit|energy|work and power|simple machine|lever|rocket|car safety|pendulum|vector|equilibrium|torque|circular|inclined plane|banked turn/i],
 ['Heat & thermal physics',/thermal|heat|temperature|conduction|convection|calorimetry/i],
 ['Waves, light & sound',/wave|light|sound|optic|lens|lenses|reflect|refract|colour|color|electromagnetic spectrum|doppler|interference/i],
 ['Rocks, minerals & Earth processes',/rock|mineral|geolog|tectonic|continental|volcano|earthquake|weathering|erosion|sediment|igneous|metamorph|mining|earth.*structure|structure.*earth/i],
 ['Space & astronomy',/space|astronom|star|solar|planet|galax|universe|big bang|moon|nebula|black hole|kepler|satellite|orbit|cosmolog|light year/i],
 ['Earth resources & environment',/climate|atmospher|greenhouse|carbon cycle|water cycle|fossil fuel|coal|oil\b|renewable|sustainab|resource|environment|weather|ozone/i],
 ['Psychology: research methods',/research method|experiment|ethical|ethic|validity|reliability|sampling|research design|data analysis/i],
 ['Psychology: learning & memory',/learning|condition|reinforc|punish|memory|forget|cognit|behaviour modification/i],
 ['Psychology: social behaviour',/social|attitude|stereotyp|attribut|dissonance|attachment|persuasion|aggression|antisocial|group|conform|obedien|identity|bystander/i]
 ];
 const prefixes={Biology:['Cells','Genetics','Evolution','Ecosystems','Coordination','Immunity','Body'], 'Human Biology':['Cells','Genetics','Evolution','Coordination','Immunity','Body'], 'Human Biology General':['Cells','Genetics','Evolution','Coordination','Immunity','Body'],Chemistry:['Atomic','Chemical','Organic','Matter'],Physics:['Electricity','Motion','Waves','Heat','Nuclear'],'Earth and Space Science':['Rocks','Space','Earth resources'],Psychology:['Psychology','Coordination','Genetics','Cells']};
 function topic(item){const clean=String(item.topic||'').replace(/(?:Southern River|Narrogin|Rossmoyne|Rossmyone|Yarra Hills|Unknown Schools|Education Perfect|EDI full|[1-5]_?(?:Biological|Chemical|Physical|Earth and Space) Sciences?|Biology II?|Chemistry II?|Physics II?)\b/gi,' ');const title=String(item.title||'').replace(/[_+]/g,' '),allowed=prefixes[item.subject];
  // Prefer the title to a broad source-folder name.
  for(const text of [title,clean])for(const [label,re] of rules){if(allowed&&!['Revision','Scientific'].some(p=>label.startsWith(p))&&!allowed.some(p=>label.startsWith(p)))continue;if(re.test(text))return label;}
  return 'General & other resources';
 }
 root.PowerPointCategories={topic};
})(typeof window==='undefined'?globalThis:window);
