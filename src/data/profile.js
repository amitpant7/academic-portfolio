export const profile = {
  firstName: 'Amit Raj',
  lastName: 'Pant',
  role: 'Machine Learning Engineer',
  tagline: 'Computer Vision · Deep Learning · Edge AI',
  location: 'Nepal · Remote',
  email: 'amitrajpant7@gmail.com',
  github: 'https://github.com/amitpant7',
  linkedin: 'https://www.linkedin.com/in/amit-pant/',
  cv: '/uploads/resume.pdf',
  bio: 'ML Engineer specialising in Computer Vision and Deep Learning, with a background in Computer Engineering from IOE Thapathali Campus, Tribhuvan University.',
  interests: [
    'Computer Vision',
    'Deep Learning',
    'Robotics & AI',
    'Signal Processing',
    'Animal Biomechanics',
    'AI for Music',
  ],
  education: [
    {
      degree: 'Bachelor of Computer Engineering',
      institution: 'Institute of Engineering, Thapathali Campus, TU',
      period: 'Sep 2019 – May 2024',
      summary: 'Coursework: DSA, Data Mining, Probability & Statistics, DBMS, Operating Systems, AI, Computer Networks.',
    },
  ],
  // Top-level entries. LogicTronix uses grouped: true with a roles[] array.
  work: [
    {
      title: 'Computer Vision Engineer',
      company: 'Vision Intelligence Systems AG',
      type: 'Full-time',
      location: 'Basel, Switzerland · Remote',
      period: 'Feb 2025 – Present',
      duration: '1 yr 5 mos',
      icon: 'eye',
      bullets: [
        'Sole engineer behind an equine video-intelligence platform — markerless horse pose estimation and motion analysis from video using GNNs and transformer architectures.',
        'Built the signal-processing stack for clean kinematics — noise mitigation, and normalization of skeletal-trajectory data.',
        'Shipped the product end-to-end: Django REST + FastAPI inference backends, the web frontend, and the analysis & presentation dashboards clients use to review results.',
      ],
    },
    {
      company: 'LogicTronix',
      grouped: true,
      duration: '1 yr 2 mos',
      icon: 'chip',
      roles: [
        {
          title: 'Machine Learning Engineer',
          type: 'Part-Time',
          period: 'Jan 2025 – Jun 2025',
          duration: '6 mos',
          bullets: [
            'Developed and optimized a pose-detection network for real-time FPGA deployment with DPU compatibility.',
            'Designed an automatic annotation system via RGB conversion and model fine-tuning — 10× faster annotation.',
          ],
        },
        {
          title: 'Junior Machine Learning Engineer',
          period: 'Aug 2024 – Feb 2025',
          duration: '7 mos',
          bullets: [
            'Built real-time FPGA object detection at 110 FPS on event data — 81% faster than conventional methods.',
            'Evaluated ML models for operational anomaly detection in live motor systems.',
            'Implemented Spiking Neural Networks (SNNs) for event-based vision applications.',
          ],
        },
        {
          title: 'Machine Learning Intern',
          period: 'May 2024 – Aug 2024',
          duration: '4 mos',
          bullets: [
            '98% accurate FPGA-based real-time passenger-counting system with head tracking.',
            'Reduced inference time up to 90% via pruning, quantization, and knowledge distillation.',
            'Implemented and trained the YOLO family from scratch (YOLOv2–v6) in PyTorch.',
          ],
        },
      ],
    },
    {
      title: 'AI Fellowship',
      company: 'Fusemachines',
      type: 'Apprenticeship',
      period: 'Sep 2023 – Mar 2024',
      duration: '7 mos',
      icon: 'graph',
      bullets: [
        'Built a Nepali ASR system using Whisper, supporting multiple accents with WER below 30.',
        'Coursework: CNNs, RNNs, Transformers, NLP, LLMs, Reinforcement Learning, MLOps, Deployment.',
      ],
    },
  ],
  skills: [
    {
      name: 'ml & deep learning',
      items: ['PyTorch', 'TensorFlow · Keras', 'Scikit-learn', 'NumPy · Pandas', 'Weights & Biases', 'Optuna'],
    },
    {
      name: 'computer vision',
      items: ['OpenCV', 'Pose Estimation', 'Object Detection', 'Action Recognition', 'Action Evaluation', 'Graph Neural Networks', 'Transformers'],
    },
    {
      name: 'edge ai & model optimization',
      items: ['FPGA (Xilinx · DPU)', 'Quantization', 'Pruning', 'Knowledge Distillation', 'Spiking Neural Networks', 'ONNX', 'TensorRT', 'C++ Inference'],
    },
    {
      name: 'backend & product',
      items: ['Django REST · FastAPI', 'Celery · Redis', 'PostgreSQL', 'Docker'],
    },
  ],
  hobbies: [
    { name: 'Drumming',           desc: 'Learning percussion & rhythms', icon: 'drum' },
    { name: 'Reading',            desc: 'Science, philosophy & tech',    icon: 'book' },
    { name: 'Learning German',    desc: 'Currently at beginner level',   icon: 'speech' },
    { name: 'Offroad Motorbiking', desc: 'Adventure rides',              icon: 'mountain' },
  ],
  // level is out of 5 (dot count)
  languages: [
    { name: 'Nepali',  proficiency: 'Native',       level: 5 },
    { name: 'English', proficiency: 'Professional',  level: 4 },
    { name: 'German',  proficiency: 'Beginner',      level: 1 },
  ],
  awards: [
    {
      title: 'LOCUS 2024 Winner — Hardware Category',
      date: 'Jun 2024',
      awarder: 'LOCUS, IOE Pulchowk',
      icon: 'trophy',
      desc: 'National competition for Electrical, Electronics, and Computer Engineering students at IOE Pulchowk Campus.',
    },
    {
      title: 'Final Year Project Grant Winner',
      date: 'Jul 2023',
      awarder: 'LogicTronix Ltd',
      icon: 'target',
      desc: 'Awarded for excellence in FPGA-based neural architecture search project development.',
    },
    {
      title: 'Docsumo Dataverse Winner',
      date: 'Jun 2024',
      awarder: 'Docsumo',
      icon: 'chart',
      desc: 'Won data analysis challenge at Docsumo Dataverse 2024.',
    },
    {
      title: 'DeerHack Hackathon Participant',
      date: 'Jan 2023',
      awarder: 'DeerHack',
      icon: 'code',
      desc: 'Participated building a recommendation system.',
    },
  ],
}

export const projects = [
  {
    title: 'FONAS — FPGA Neural Architecture Search',
    desc: 'Searched for efficient deep neural architectures for FPGA image classification using arithmetic intensity and latency constraints. Outperformed existing networks on ImageNet-1k.',
    tags: ['FPGA', 'Neural Architecture Search', 'Hardware Optimization'],
    link: 'https://github.com/FPGA-Vision/FONAS',
    year: '2024',
  },
  {
    title: 'EfficientNetV2 Channel Pruning',
    desc: 'Pruned 88% of EfficientNetV2 channels — 14× smaller, 2.5× faster, 14× fewer parameters with only 2% accuracy drop.',
    tags: ['Channel Pruning', 'Model Compression', 'PyTorch'],
    link: 'https://github.com/amitpant7/Channel-Pruning-EfficientNetV2',
    year: '2024',
  },
  {
    title: 'LungVision — Pulmonary Disease Classification',
    desc: 'DNN classifying Normal, Tuberculosis, and Pneumonia from chest X-rays, addressing class imbalance in medical imaging datasets.',
    tags: ['Healthcare AI', 'CNN', 'X-ray Classification'],
    link: 'https://github.com/amitpant7/Pulmonary-Classifier',
    year: '2023',
  },
]
