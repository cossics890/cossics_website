const images = import.meta.glob('../assets/products/*.webp', { eager: true, import: 'default' });
const img = (name) => images[`../assets/products/${name}.webp`];

const stabilizerFeatures = [
  'Low & High voltage cut protection',
  'Heavy duty copper winding',
  'Metallic powder coated sturdy body',
  'Advanced IC technology design',
  'Time delay system for compressor safety',
];

export const products = [
  {
    id: 'auto-cut-transformer',
    name: 'Auto Cut Transformer',
    category: 'Auto-Cut',
    image: img('auto-cut-transformer'),
    short: 'Flagship grid / generator auto-cut transformer with dual rotary selectors and digital display.',
    description:
      'The COSSICS Auto Cut Transformer is our flagship heavy-duty unit, designed for DJ / PA systems, mainline supply and generator backup. Dual rotary selectors let you switch between Grid and Generator, while the micro-controlled digital meter shows live voltage. Mounted on castor wheels for easy movement.',
    specs: { 'Input Range': '130 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Display: 'Digital' },
    models: [
      { model: 'MCP 10130', capacity: '10 KVA' },
      { model: 'MCP 15130', capacity: '15 KVA' },
      { model: 'MCP 20130', capacity: '20 KVA' },
    ],
    features: [...stabilizerFeatures, 'Grid / Generator selector switch', 'Castor wheels for portability'],
  },
  {
    id: 'servo-rv',
    name: 'Automatic Servo Voltage Stabilizer',
    category: 'Servo',
    image: img('servo-rv'),
    short: 'Servo controlled stabilizer with 225V constant output and ±5% tolerance.',
    description:
      'Automatic Servo Voltage Stabilizers from COSSICS deliver highly precise output voltage using a servo motor driven variac. Ideal for homes, offices, hospitals and sensitive machinery where a stable 225V supply is critical.',
    specs: {
      'Input Range': '160 - 280V',
      'Output Range': '225V',
      'Working Range': '150V',
      Frequency: '50Hz',
      Tolerance: '+/- 5%',
    },
    models: [
      { model: 'RV 3160', capacity: '3 KVA' },
      { model: 'RV 5160', capacity: '5 KVA' },
      { model: 'RV 10160', capacity: '10 KVA' },
    ],
    features: ['Servo motor based correction', 'Digital voltage display', 'Input / output terminal panel', 'Heavy gauge steel cabinet', 'Castor wheels'],
  },
  {
    id: 'auto-cut-5g',
    name: 'Auto Cut Voltage Stabilizer 5G Series',
    category: 'Auto-Cut',
    image: img('auto-cut-5g'),
    short: 'Rack-style 5G series stabilizer with multiple industrial sockets on the rear panel.',
    description:
      'The 5G Series Auto Cut Stabilizer comes in a rugged rack-mount cabinet with twin rotary switches, dual digital meters and a rear panel full of industrial and universal sockets. Specially designed for DJ, PA and event power distribution.',
    specs: { 'Input Range': '130 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Series: '5G' },
    models: [
      { model: 'RV 10130PA', capacity: '10 KVA' },
      { model: 'RV 15130PA', capacity: '15 KVA' },
    ],
    features: [...stabilizerFeatures, 'Industrial + universal socket panel', 'Dual digital meters'],
  },
  {
    id: 'micro-controlled-mpl',
    name: 'Micro Controlled Voltage Stabilizer',
    category: 'Micro-Controlled',
    image: img('micro-controlled-mpl'),
    short: 'Micro controlled stabilizer with twin rotary selectors and 6 output sockets.',
    description:
      'COSSICS Micro Controlled Voltage Stabilizers use a smart microcontroller to monitor and correct voltage instantly. The side panel offers six universal output sockets, making it perfect for commercial setups and workshops.',
    specs: { 'Input Range': '130 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Sockets: '6 Universal' },
    models: [
      { model: 'MPL 10130', capacity: '10 KVA' },
      { model: 'MPL 15130', capacity: '15 KVA' },
      { model: 'MCP 10130', capacity: '10 KVA' },
      { model: 'MCP 15130', capacity: '15 KVA' },
    ],
    features: [...stabilizerFeatures, 'Six output sockets'],
  },
  {
    id: 'automatic-rps',
    name: 'Automatic Voltage Stabilizer (Mainline)',
    category: 'Automatic',
    image: img('automatic-rps'),
    short: 'Wall mount automatic stabilizer for AC and mainline use with 220V output.',
    description:
      'A sleek wall-mounted automatic stabilizer ideal for air conditioners and whole-home mainline protection. Available in both 130V and 90V low-input variants to suit every area.',
    specs: { 'Input Range': '130 - 280V & 90 - 280V', 'Output Range': '220V', Frequency: '50Hz', Mounting: 'Wall Mount' },
    models: [
      { model: 'RPS 1130 & RPS 1090', capacity: '1 KVA' },
      { model: 'RPS 2130 & RPS 2090', capacity: '2 KVA' },
      { model: 'RPS 3130 & RPS 3090', capacity: '3 KVA' },
      { model: 'RPS 4130 & RPS 4090', capacity: '4 KVA' },
      { model: 'RPS 5130 & RPS 5090', capacity: '5 KVA' },
    ],
    features: [...stabilizerFeatures, 'Slim wall mount design'],
  },
  {
    id: 'automatic-gold',
    name: 'Automatic Voltage Stabilizer Gold',
    category: 'Automatic',
    image: img('automatic-gold'),
    short: 'Gold series stabilizer with analog meter and wide 90 - 280V input range.',
    description:
      'The Gold Series is built for areas with very low voltage. With a wide 90 - 280V input window and an analog voltmeter, it keeps your home running smoothly even in the toughest supply conditions.',
    specs: { 'Input Range': '90 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Meter: 'Analog' },
    models: [
      { model: 'RPS (A) 5090 Gold', capacity: '5 KVA' },
      { model: 'RPS (A) 8090 Gold', capacity: '8 KVA' },
      { model: 'RPS (A) 10090 Gold', capacity: '10 KVA' },
    ],
    features: [...stabilizerFeatures, 'Wide low-voltage working range'],
  },
  {
    id: 'micro-controlled-20kva',
    name: 'Micro Controlled Stabilizer Heavy Duty',
    category: 'Micro-Controlled',
    image: img('micro-controlled-20kva'),
    short: 'Heavy duty micro controlled unit up to 20 KVA with front socket panel.',
    description:
      'Our heavy duty Micro Controlled Stabilizer handles loads up to 20 KVA. It features top-mounted rotary selectors, a digital display and a front socket bank for direct connection of equipment.',
    specs: { 'Input Range': '130 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Capacity: 'Up to 20 KVA' },
    models: [
      { model: 'MPL 10130', capacity: '10 KVA' },
      { model: 'MPL 15130', capacity: '15 KVA' },
      { model: 'MPL 20130', capacity: '20 KVA' },
      { model: 'MCP 10130', capacity: '10 KVA' },
      { model: 'MCP 15130', capacity: '15 KVA' },
      { model: 'MCP 20130', capacity: '20 KVA' },
    ],
    features: [...stabilizerFeatures, 'Front socket bank', 'Carry handles & castor wheels'],
  },
  {
    id: 'automatic-rv790',
    name: 'Electronic Voltage Corrector',
    category: 'Automatic',
    image: img('automatic-rv790'),
    short: 'Compact 0.5 KVA stabilizer for TV, fridge and small appliances.',
    description:
      'A compact and reliable electronic voltage corrector for televisions, refrigerators and home gadgets. Comes with an analog meter, power switch and a rear universal socket.',
    specs: { 'Input Range': '90 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Meter: 'Analog' },
    models: [{ model: 'RV 790', capacity: '0.5 KVA' }],
    features: ['Compact design', 'Analog voltmeter', 'Rear universal socket', 'Low & high cut protection'],
  },
  {
    id: 'cvt-500va',
    name: 'Constant Voltage Transformer 500VA',
    category: 'Transformer',
    image: img('cvt-500va'),
    short: 'CVT with ±1% tolerance – ideal for sensitive electronics.',
    description:
      'COSSICS Constant Voltage Transformers provide an ultra stable 220V output with just ±1% tolerance. Isolated and surge safe, it safeguards sensitive gadgets like computers, printers and medical equipment.',
    specs: { 'Input Range': '180 - 260V', 'Output Range': '220V', Frequency: '50Hz', Tolerance: '+/- 1%' },
    models: [{ model: 'CV 500VA', capacity: '500 VA' }],
    features: ['Isolation transformer', 'Safeguard sensitive gadgets', '±1% output tolerance', 'Multiple output sockets'],
  },
  {
    id: 'cvt-1kva',
    name: 'Constant Voltage Transformer 1 KVA',
    category: 'Transformer',
    image: img('cvt-1kva'),
    short: '1 KVA CVT with digital meter and ±1% regulated output.',
    description:
      'The 1 KVA Constant Voltage Transformer gives a pure and constant 220V supply for offices and labs. Built with an isolation transformer to protect your equipment from spikes and noise.',
    specs: { 'Input Range': '180 - 260V', 'Output Range': '220V', Frequency: '50Hz', Tolerance: '+/- 1%' },
    models: [{ model: 'CV 1000', capacity: '1 KVA' }],
    features: ['Isolation transformer', 'Digital voltmeter', '±1% output tolerance', 'Heavy duty build'],
  },
  {
    id: 'cvt-2kva',
    name: 'Constant Voltage Transformer 2 KVA',
    category: 'Transformer',
    image: img('cvt-2kva'),
    short: '2 KVA CVT with cooling fan for continuous heavy loads.',
    description:
      'Our 2 KVA Constant Voltage Transformer is designed for continuous duty. A built-in cooling fan and ventilated cabinet ensure long, reliable operation for heavier electronic loads.',
    specs: { 'Input Range': '180 - 260V', 'Output Range': '220V', Frequency: '50Hz', Tolerance: '+/- 1%' },
    models: [{ model: 'CV 2000', capacity: '2 KVA' }],
    features: ['Isolation transformer', 'Built-in cooling fan', '±1% output tolerance', 'Ventilated cabinet'],
  },
  {
    id: 'auto-cut-cxa3100',
    name: 'Auto Cut Voltage Stabilizer CXA',
    category: 'Auto-Cut',
    image: img('auto-cut-cxa3100'),
    short: 'CXA / CXC series auto-cut stabilizer from 3 to 8 KVA.',
    description:
      'The CXA / CXC Series Auto Cut Stabilizer offers precise digital metering with a rotary selector. A perfect choice for shops, homes and small offices needing 3 to 8 KVA of protected power.',
    specs: { 'Input Range': '100 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz' },
    models: [
      { model: 'CXA 3100', capacity: '3 KVA' },
      { model: 'CXA 5100', capacity: '5 KVA' },
      { model: 'CXA 8100', capacity: '8 KVA' },
      { model: 'CXC 3130', capacity: '3 KVA' },
      { model: 'CXC 5130', capacity: '5 KVA' },
      { model: 'CXC 8130', capacity: '8 KVA' },
    ],
    features: stabilizerFeatures,
  },
  {
    id: 'auto-cut-cxa-red',
    name: 'Auto Cut Stabilizer with Socket Panel',
    category: 'Auto-Cut',
    image: img('auto-cut-cxa-red'),
    short: 'Single-dial auto-cut stabilizer with 6 socket side panel.',
    description:
      'A single-dial auto-cut stabilizer with an integrated side socket panel. Handles 10 to 15 KVA loads with ease and includes MCB protection for added safety.',
    specs: { 'Input Range': '105 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz', Sockets: '6 Universal' },
    models: [
      { model: 'CXA 10100', capacity: '10 KVA' },
      { model: 'CXA 15100', capacity: '15 KVA' },
      { model: 'CXC 10130', capacity: '10 KVA' },
      { model: 'CXC 15130', capacity: '15 KVA' },
    ],
    features: [...stabilizerFeatures, 'MCB protection', 'Side socket panel'],
  },
  {
    id: 'auto-cut-cxa10100',
    name: 'Auto Cut Voltage Stabilizer Pro',
    category: 'Auto-Cut',
    image: img('auto-cut-cxa10100'),
    short: 'Professional auto-cut stabilizer with carry handles, 10 - 15 KVA.',
    description:
      'The Auto Cut Pro Series features carry handles, a digital display and a rotary selector in a rugged powder coated body. Designed for demanding commercial and event use.',
    specs: { 'Input Range': '100 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz' },
    models: [
      { model: 'CXA 10100', capacity: '10 KVA' },
      { model: 'CXA 10050', capacity: '10 KVA' },
      { model: 'CXA 15100', capacity: '15 KVA' },
      { model: 'CXC 10130', capacity: '10 KVA' },
      { model: 'CXC 15130', capacity: '15 KVA' },
    ],
    features: [...stabilizerFeatures, 'Side carry handles'],
  },
  {
    id: 'auto-cut-cxa20130',
    name: 'Auto Cut Stabilizer 5G 20 KVA',
    category: 'Auto-Cut',
    image: img('auto-cut-cxa20130'),
    short: 'High capacity 20 KVA 5G series auto-cut stabilizer.',
    description:
      'Our highest capacity 5G series auto-cut stabilizer, delivering 20 KVA of protected power with twin rotary selectors. Ideal for large events, factories and complete building mainlines.',
    specs: { 'Input Range': '130 - 270V', 'Output Range': '200 - 250V', Frequency: '50Hz', Series: '5G' },
    models: [
      { model: 'CXA 20130', capacity: '20 KVA' },
      { model: 'CXC 20130', capacity: '20 KVA' },
    ],
    features: [...stabilizerFeatures, 'Twin rotary selectors'],
  },
  {
    id: 'micro-controlled-2kva',
    name: 'Micro Controlled Stabilizer Compact',
    category: 'Micro-Controlled',
    image: img('micro-controlled-2kva'),
    short: 'Compact micro controlled stabilizer in 1 & 2 KVA ratings.',
    description:
      'A compact micro controlled stabilizer for homes and small offices. Delivers smart, fast voltage correction with a digital display and rotary selector.',
    specs: { 'Input Range': '130 - 280V', 'Output Range': '200 - 250V', Frequency: '50Hz' },
    models: [
      { model: 'MPL 1130', capacity: '1 KVA' },
      { model: 'MPL 2130', capacity: '2 KVA' },
      { model: 'MCP 1130', capacity: '1 KVA' },
      { model: 'MCP 2130', capacity: '2 KVA' },
    ],
    features: stabilizerFeatures,
  },
  {
    id: 'power-board',
    name: 'Power Board',
    category: 'Power Board',
    image: img('power-board'),
    short: 'Single & three phase power board with 6 to 12 sockets.',
    description:
      'COSSICS Power Boards distribute power safely for DJ, PA and industrial setups. Available in single and three phase, rated 15 KVA and above, with 6 to 12 heavy duty sockets and MCB protection.',
    specs: { Range: 'Single Phase & Three Phase', Capacity: '15 KVA & Above', Sockets: '6 to 12' },
    models: [
      { model: 'Single Phase', capacity: '15 KVA+' },
      { model: 'Three Phase', capacity: '15 KVA+' },
    ],
    features: ['MCB protection', 'Heavy duty sockets', 'Indicator lamps', 'Metal cabinet'],
  },
  {
    id: 'pp-board-6way',
    name: 'Water Proof PP Power Board 6 Way',
    category: 'Power Board',
    image: img('pp-board-6way'),
    short: 'Weather proof PP board with industrial sockets – 6 way.',
    description:
      'A rugged water proof PP power board with industrial grade sockets and MCB protection. Perfect for outdoor events, construction sites and temporary power distribution.',
    specs: { Body: 'Poly Propylene (PP)', Ways: '6 Way', Protection: 'Water Proof' },
    models: [{ model: 'PP Board', capacity: '6 Way' }],
    features: ['Water proof enclosure', 'Industrial sockets', 'MCB protection', 'Lightweight PP body'],
  },
  {
    id: 'pp-board-3way',
    name: 'Water Proof PP Power Board 3 Way',
    category: 'Power Board',
    image: img('pp-board-3way'),
    short: 'Slim water proof PP board – 3 way industrial sockets.',
    description:
      'A slim and portable 3 way water proof power board with industrial sockets. Easy to carry and quick to install at any location.',
    specs: { Body: 'Poly Propylene (PP)', Ways: '3 Way', Protection: 'Water Proof' },
    models: [{ model: 'PP Board', capacity: '3 Way' }],
    features: ['Water proof enclosure', 'Industrial sockets', 'Portable design'],
  },
  {
    id: 'ms-outdoor-panel',
    name: 'Water Proof MS Out Door Panel',
    category: 'Power Board',
    image: img('ms-outdoor-panel'),
    short: 'Mild steel outdoor panel on stand – 12 & 16 way.',
    description:
      'A heavy duty mild steel outdoor distribution panel mounted on a stand. Water proof construction with indicator lamps and multiple industrial sockets.',
    specs: { Body: 'Mild Steel (MS)', Ways: '12 Way / 16 Way', Protection: 'Water Proof' },
    models: [
      { model: 'MS Panel', capacity: '12 Way' },
      { model: 'MS Panel', capacity: '16 Way' },
    ],
    features: ['Water proof MS body', 'Floor stand', 'Indicator lamps', 'Industrial sockets'],
  },
  {
    id: 'outdoor-panel',
    name: 'Water Proof Out Door Panel',
    category: 'Power Board',
    image: img('outdoor-panel'),
    short: 'Compact outdoor panel on stand – 6 & 8 way.',
    description:
      'A compact water proof outdoor panel with indicator lamps and industrial sockets, mounted on a sturdy stand for outdoor installations.',
    specs: { Body: 'Mild Steel', Ways: '6 Way / 8 Way', Protection: 'Water Proof' },
    models: [
      { model: 'Out Door Panel', capacity: '6 Way' },
      { model: 'Out Door Panel', capacity: '8 Way' },
    ],
    features: ['Water proof body', 'Floor stand', 'Indicator lamps', 'Industrial sockets'],
  },
];

export const categories = ['All', ...new Set(products.map((p) => p.category))];

export const getProduct = (id) => products.find((p) => p.id === id);

