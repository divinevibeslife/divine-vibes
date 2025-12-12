import React, { useState } from 'react';
import { Download, Info, Globe } from 'lucide-react';

const ELEMENTS = {
  'H': { name: 'Hydrogen', number: 1, color: '#FFFFFF', meaning: 'Purity, new beginnings, clarity' },
  'He': { name: 'Helium', number: 2, color: '#D9FFFF', meaning: 'Lightness, joy, elevation' },
  'Li': { name: 'Lithium', number: 3, color: '#CC80FF', meaning: 'Energy, mood balance, stability' },
  'Be': { name: 'Beryllium', number: 4, color: '#C2FF00', meaning: 'Strength, resilience, structure' },
  'B': { name: 'Boron', number: 5, color: '#FFB5B5', meaning: 'Growth, support, foundation' },
  'C': { name: 'Carbon', number: 6, color: '#909090', meaning: 'Life, adaptability, transformation' },
  'N': { name: 'Nitrogen', number: 7, color: '#3050F8', meaning: 'Calm, stability, peace' },
  'O': { name: 'Oxygen', number: 8, color: '#FF0D0D', meaning: 'Vitality, passion, life force' },
  'F': { name: 'Fluorine', number: 9, color: '#90E050', meaning: 'Protection, strength, sharpness' },
  'Ne': { name: 'Neon', number: 10, color: '#B3E3F5', meaning: 'Brightness, attraction, visibility' },
  'Na': { name: 'Sodium', number: 11, color: '#AB5CF2', meaning: 'Balance, reactivity, connection' },
  'Mg': { name: 'Magnesium', number: 12, color: '#8AFF00', meaning: 'Healing, relaxation, growth' },
  'Al': { name: 'Aluminum', number: 13, color: '#BFA6A6', meaning: 'Flexibility, lightness, reflection' },
  'Si': { name: 'Silicon', number: 14, color: '#F0C8A0', meaning: 'Foundation, technology, structure' },
  'P': { name: 'Phosphorus', number: 15, color: '#FF8000', meaning: 'Energy, illumination, creativity' },
  'S': { name: 'Sulfur', number: 16, color: '#FFFF30', meaning: 'Transformation, purification, healing' },
  'Cl': { name: 'Chlorine', number: 17, color: '#1FF01F', meaning: 'Cleansing, protection, clarity' },
  'Ar': { name: 'Argon', number: 18, color: '#80D1E3', meaning: 'Peace, nobility, non-reactivity' },
  'K': { name: 'Potassium', number: 19, color: '#8F40D4', meaning: 'Activity, impulse, movement' },
  'Ca': { name: 'Calcium', number: 20, color: '#3DFF00', meaning: 'Strength, structure, support' },
  'Sc': { name: 'Scandium', number: 21, color: '#E6E6E6', meaning: 'Rarity, value, uniqueness' },
  'Ti': { name: 'Titanium', number: 22, color: '#BFC2C7', meaning: 'Strength, endurance, resilience' },
  'V': { name: 'Vanadium', number: 23, color: '#A6A6AB', meaning: 'Power, flexibility, versatility' },
  'Cr': { name: 'Chromium', number: 24, color: '#8A99C7', meaning: 'Shine, hardness, protection' },
  'Mn': { name: 'Manganese', number: 25, color: '#9C7AC7', meaning: 'Balance, courage, determination' },
  'Fe': { name: 'Iron', number: 26, color: '#E06633', meaning: 'Strength, willpower, grounding' },
  'Co': { name: 'Cobalt', number: 27, color: '#F090A0', meaning: 'Loyalty, stability, magnetism' },
  'Ni': { name: 'Nickel', number: 28, color: '#50D050', meaning: 'Adaptability, resistance, durability' },
  'Cu': { name: 'Copper', number: 29, color: '#C88033', meaning: 'Conductivity, warmth, prosperity' },
  'Zn': { name: 'Zinc', number: 30, color: '#7D80B0', meaning: 'Healing, immunity, protection' },
  'Ga': { name: 'Gallium', number: 31, color: '#C28F8F', meaning: 'Fluidity, adaptability, change' },
  'Ge': { name: 'Germanium', number: 32, color: '#668F8F', meaning: 'Balance, semiconductor, harmony' },
  'As': { name: 'Arsenic', number: 33, color: '#BD80E3', meaning: 'Power, caution, transformation' },
  'Se': { name: 'Selenium', number: 34, color: '#FFA100', meaning: 'Protection, antioxidant, vitality' },
  'Br': { name: 'Bromine', number: 35, color: '#A62929', meaning: 'Intensity, depth, passion' },
  'Kr': { name: 'Krypton', number: 36, color: '#5CB8D1', meaning: 'Hidden strength, rarity, nobility' },
  'Rb': { name: 'Rubidium', number: 37, color: '#702EB0', meaning: 'Activity, reactivity, energy' },
  'Sr': { name: 'Strontium', number: 38, color: '#00FF00', meaning: 'Brilliance, light, radiance' },
  'Y': { name: 'Yttrium', number: 39, color: '#94FFFF', meaning: 'Technology, innovation, rarity' },
  'Zr': { name: 'Zirconium', number: 40, color: '#94E0E0', meaning: 'Endurance, resistance, beauty' },
  'Nb': { name: 'Niobium', number: 41, color: '#73C2C9', meaning: 'Strength, superconductivity, power' },
  'Mo': { name: 'Molybdenum', number: 42, color: '#54B5B5', meaning: 'Support, strength, catalyst' },
  'Tc': { name: 'Technetium', number: 43, color: '#3B9E9E', meaning: 'Innovation, radioactivity, rarity' },
  'Ru': { name: 'Ruthenium', number: 44, color: '#248F8F', meaning: 'Nobility, resistance, rarity' },
  'Rh': { name: 'Rhodium', number: 45, color: '#0A7D8C', meaning: 'Reflection, value, catalyst' },
  'Pd': { name: 'Palladium', number: 46, color: '#006985', meaning: 'Purity, catalyst, absorption' },
  'Ag': { name: 'Silver', number: 47, color: '#C0C0C0', meaning: 'Clarity, intuition, reflection' },
  'Cd': { name: 'Cadmium', number: 48, color: '#FFD98F', meaning: 'Protection, color, warning' },
  'In': { name: 'Indium', number: 49, color: '#A67573', meaning: 'Softness, flexibility, rarity' },
  'Sn': { name: 'Tin', number: 50, color: '#668080', meaning: 'Preservation, flexibility, protection' },
  'Sb': { name: 'Antimony', number: 51, color: '#9E63B5', meaning: 'Fire, protection, alchemy' },
  'Te': { name: 'Tellurium', number: 52, color: '#D47A00', meaning: 'Technology, rarity, semiconductor' },
  'I': { name: 'Iodine', number: 53, color: '#940094', meaning: 'Health, thyroid, balance' },
  'Xe': { name: 'Xenon', number: 54, color: '#429EB0', meaning: 'Illumination, rarity, nobility' },
  'Cs': { name: 'Cesium', number: 55, color: '#57178F', meaning: 'Time, precision, reactivity' },
  'Ba': { name: 'Barium', number: 56, color: '#00C900', meaning: 'Weight, radiance, visibility' },
  'La': { name: 'Lanthanum', number: 57, color: '#70D4FF', meaning: 'Rarity, catalyst, beginning' },
  'Ce': { name: 'Cerium', number: 58, color: '#FFFFC7', meaning: 'Abundance, spark, ignition' },
  'Pr': { name: 'Praseodymium', number: 59, color: '#D9FFC7', meaning: 'Green fire, rarity, color' },
  'Nd': { name: 'Neodymium', number: 60, color: '#C7FFC7', meaning: 'Magnetism, attraction, strength' },
  'Pm': { name: 'Promethium', number: 61, color: '#A3FFC7', meaning: 'Prometheus, light, rarity' },
  'Sm': { name: 'Samarium', number: 62, color: '#8FFFC7', meaning: 'Magnetism, strength, permanence' },
  'Eu': { name: 'Europium', number: 63, color: '#61FFC7', meaning: 'Display, brightness, phosphorescence' },
  'Gd': { name: 'Gadolinium', number: 64, color: '#45FFC7', meaning: 'Magnetism, medical, contrast' },
  'Tb': { name: 'Terbium', number: 65, color: '#30FFC7', meaning: 'Green phosphor, display, light' },
  'Dy': { name: 'Dysprosium', number: 66, color: '#1FFFC7', meaning: 'Magnetism, laser, hard to obtain' },
  'Ho': { name: 'Holmium', number: 67, color: '#00FF9C', meaning: 'Magnetism, laser, strongest field' },
  'Er': { name: 'Erbium', number: 68, color: '#00E675', meaning: 'Fiber optics, pink, amplification' },
  'Tm': { name: 'Thulium', number: 69, color: '#00D452', meaning: 'X-ray, portable, medical' },
  'Yb': { name: 'Ytterbium', number: 70, color: '#00BF38', meaning: 'Laser, atomic clock, time' },
  'Lu': { name: 'Lutetium', number: 71, color: '#00AB24', meaning: 'End, catalyst, rarest earth' },
  'Hf': { name: 'Hafnium', number: 72, color: '#4DC2FF', meaning: 'Resistance, nuclear, control' },
  'Ta': { name: 'Tantalum', number: 73, color: '#4DA6FF', meaning: 'Resistance, biocompatibility, patience' },
  'W': { name: 'Tungsten', number: 74, color: '#2194D6', meaning: 'Strength, endurance, highest melting' },
  'Re': { name: 'Rhenium', number: 75, color: '#267DAB', meaning: 'Rarity, catalyst, high temperature' },
  'Os': { name: 'Osmium', number: 76, color: '#266696', meaning: 'Density, hardness, rarity' },
  'Ir': { name: 'Iridium', number: 77, color: '#175487', meaning: 'Resistance, hardness, meteor marker' },
  'Pt': { name: 'Platinum', number: 78, color: '#D0D0E0', meaning: 'Nobility, value, catalyst' },
  'Au': { name: 'Gold', number: 79, color: '#FFD123', meaning: 'Wealth, sun, perfection' },
  'Hg': { name: 'Mercury', number: 80, color: '#B8B8D0', meaning: 'Fluidity, communication, quicksilver' },
  'Tl': { name: 'Thallium', number: 81, color: '#A6544D', meaning: 'Green fire, sensitivity, detection' },
  'Pb': { name: 'Lead', number: 82, color: '#575961', meaning: 'Protection, weight, transformation' },
  'Bi': { name: 'Bismuth', number: 83, color: '#9E4FB5', meaning: 'Rainbow, crystal, transformation' },
  'Po': { name: 'Polonium', number: 84, color: '#AB5C00', meaning: 'Radioactivity, heat, rarity' },
  'At': { name: 'Astatine', number: 85, color: '#754F45', meaning: 'Rarest, instability, fleeting' },
  'Rn': { name: 'Radon', number: 86, color: '#428296', meaning: 'Radioactive, gas, hidden danger' },
  'Fr': { name: 'Francium', number: 87, color: '#420066', meaning: 'Rarest, radioactive, unstable' },
  'Ra': { name: 'Radium', number: 88, color: '#007D00', meaning: 'Radioactivity, glow, medical' },
  'Ac': { name: 'Actinium', number: 89, color: '#70ABFA', meaning: 'Radioactivity, glow, beginning' },
  'Th': { name: 'Thorium', number: 90, color: '#00BAFF', meaning: 'Nuclear fuel, energy, potential' },
  'Pa': { name: 'Protactinium', number: 91, color: '#00A1FF', meaning: 'Parent, decay, intermediate' },
  'U': { name: 'Uranium', number: 92, color: '#008FFF', meaning: 'Power, energy, atomic age' },
  'Np': { name: 'Neptunium', number: 93, color: '#0080FF', meaning: 'Transuranium, synthetic, detection' },
  'Pu': { name: 'Plutonium', number: 94, color: '#006BFF', meaning: 'Power, energy, transformation' },
  'Am': { name: 'Americium', number: 95, color: '#545CF2', meaning: 'Smoke detector, safety, ionization' },
  'Cm': { name: 'Curium', number: 96, color: '#785CE3', meaning: 'Space, power, heat' },
  'Bk': { name: 'Berkelium', number: 97, color: '#8A4FE3', meaning: 'Research, synthetic, scientific' },
  'Cf': { name: 'Californium', number: 98, color: '#A136D4', meaning: 'Neutron, medical, cancer treatment' },
  'Es': { name: 'Einsteinium', number: 99, color: '#B31FD4', meaning: 'Einstein, intelligence, rarity' },
};

function App() {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);
  const [country, setCountry] = useState('IN');
  const [email, setEmail] = useState('');
  const [showAbout, setShowAbout] = useState(false);

  const parseNameToElements = (inputName) => {
    const upperName = inputName.toUpperCase().replace(/[^A-Z]/g, '');
    const elements = [];
    let i = 0;

    while (i < upperName.length) {
      let found = false;
      
      if (i < upperName.length - 1) {
        const twoLetter = upperName[i] + upperName[i + 1].toLowerCase();
        if (ELEMENTS[twoLetter]) {
          elements.push(twoLetter);
          i += 2;
          found = true;
        }
      }
      
      if (!found) {
        const oneLetter = upperName[i];
        if (ELEMENTS[oneLetter]) {
          elements.push(oneLetter);
          i += 1;
          found = true;
        }
      }
      
      if (!found) {
        i += 1;
      }
    }
    
    return elements;
  };

  const handleSubmit = () => {
    if (!name.trim()) return;
    
    const elements = parseNameToElements(name);
    setResult({
      name: name,
      elements: elements.map(el => ELEMENTS[el])
    });
  };

  const downloadResult = () => {
    const content = `
NAME CHEMISTRY REPORT
www.divinevibes.life
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${result.name.toUpperCase()}

ELEMENTAL BREAKDOWN:
${result.elements.map((el, idx) => `
${idx + 1}. ${el.name} (${el.number})
   Color: ${el.color}
   Life Meaning: ${el.meaning}
`).join('\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated on: ${new Date().toLocaleDateString()}
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${result.name}_chemistry.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (showAbout) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setShowAbout(false)}
            className="mb-6 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            ← Back to App
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">
              Know Your Name Chemistry
            </h1>
            
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to Divine Vibes! Every name carries hidden chemistry within its letters. 
                Our unique algorithm breaks down your name into periodic table elements, revealing 
                the atomic properties and color energies embedded in your identity.
              </p>
              
              <h2 className="text-2xl font-semibold text-purple-600 mt-8">
                How It Works
              </h2>
              <p className="text-gray-700">
                Each letter or combination of letters in your name corresponds to a chemical element 
                from the periodic table. For example, "GENIUS" becomes Ge-Ni-U-S (Germanium, Nickel, 
                Uranium, Sulfur).
              </p>
              
              <h2 className="text-2xl font-semibold text-purple-600 mt-8">
                The Science of Colors
              </h2>
              <p className="text-gray-700">
                Each element has a unique color recognized by chemists worldwide. These colors carry 
                specific vibrational energies and meanings that can influence personality traits, 
                life paths, and spiritual journeys.
              </p>
              
              <h2 className="text-2xl font-semibold text-purple-600 mt-8">
                What You'll Discover
              </h2>
              <div className="text-gray-700 space-y-2 pl-6">
                <p>• Elemental breakdown of your name</p>
                <p>• Atomic numbers and their significance</p>
                <p>• Universal color codes for each element</p>
                <p>• Life meanings associated with those colors</p>
                <p>• Downloadable personalized report</p>
              </div>
              
              <div className="mt-8 p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                <h3 className="text-xl font-semibold text-purple-600 mb-2">
                  Ready to Discover Your Chemistry?
                </h3>
                <p className="text-gray-700">
                  Enter any name or word to reveal its hidden elemental nature and color energies!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-purple-600 mb-2">
              Divine Vibes
            </h1>
            <p className="text-gray-600 text-lg">www.divinevibes.life</p>
            <button
              onClick={() => setShowAbout(true)}
              className="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
            >
              <Info size={20} />
              Know Your Name Chemistry
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-purple-600" />
              <span className="text-gray-700 font-medium">Select Region:</span>
            </div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              <option value="IN">India (₹)</option>
              <option value="US">United States ($)</option>
              <option value="UK">United Kingdom (£)</option>
              <option value="OTHER">Rest of World ($)</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address (Optional - for future updates)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg font-medium mb-3">
                  Enter Your Name or Word
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="e.g., GENIUS"
                  className="w-full px-6 py-4 text-xl border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition"
                  autoFocus
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-semibold py-4 rounded-xl hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition shadow-lg"
              >
                Discover Chemistry ✨
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Currently in FREE BETA • Payment integration coming soon</p>
            <p className="mt-1">
              {country === 'IN' ? '₹51 per name or ₹120 for 5 names' : '$1 per name or $3 for 5 names'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Divine Vibes</h1>
          <p className="text-gray-600">www.divinevibes.life</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Chemistry of "{result.name.toUpperCase()}"
            </h2>
            <button
              onClick={downloadResult}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              <Download size={20} />
              Download Report
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8 p-6 bg-gray-50 rounded-xl">
            {result.elements.map((el, idx) => (
              <div
                key={idx}
                className="relative border-4 border-gray-800 rounded-lg p-4 w-32 h-32 flex flex-col justify-between"
                style={{ backgroundColor: el.color }}
              >
                <div className="text-xs font-mono text-gray-800 flex justify-between">
                  <span>{el.number}</span>
                </div>
                <div className="text-5xl font-bold text-gray-800 text-center">
                  {Object.keys(ELEMENTS).find(key => ELEMENTS[key] === el)}
                </div>
                <div className="text-xs text-gray-800 text-center font-medium">
                  {el.name}
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">#</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Atomic Number</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Color</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Life Meaning & Energy</th>
                </tr>
              </thead>
              <tbody>
                {result.elements.map((el, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{idx + 1}</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">{el.name}</td>
                    <td className="border border-gray-300 px-4 py-3">{el.number}</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded border-2 border-gray-400"
                          style={{ backgroundColor: el.color }}
                        />
                        <span className="font-mono text-sm">{el.color}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{el.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={() => {
                setResult(null);
                setName('');
              }}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              Try Another Name
            </button>
            <button
              onClick={() => setShowAbout(true)}
              className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;