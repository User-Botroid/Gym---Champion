import { DayWorkout, DayOfWeek } from '../types/workout';

export const WORKOUT_DATABASE: Record<DayOfWeek, DayWorkout> = {
  monday: {
    day: 'monday',
    dayTitle: 'Monday: Chest & Triceps + Upper Gut',
    shortTitle: 'Chest & Triceps',
    focus: 'Pectorals, Triceps, Upper Rectus Abdominis',
    description: 'Heavy pushing volume focused on chest hypertrophy, lockout triceps power, and upper core conditioning.',
    totalMinutes: 60,
    targetMuscles: ['chest', 'triceps', 'abs'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Dynamic Stretching & Mobility',
        durationMinutes: 10,
        description: 'Lubricate shoulder joints, open up chest fascia, and warm shoulder blades for heavy presses.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'mon-w1',
            name: 'Dynamic Arm Circles',
            targetMuscle: 'Shoulder Rotators & Deltoids',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Bodyweight',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Light 1kg dumbbells' },
            sets: 2,
            repsOrDuration: '30 sec forward / 30 sec backward',
            restSeconds: 15,
            formGuide: [
              'Extend arms horizontally at 90 degrees with palms down.',
              'Begin small fluid circles, gradually expanding diameter.',
              'Keep core engaged and avoid arching the lower back.'
            ],
            tanglishTip: 'Kaiya straight-ah vachuko, chinna circle-la start panni appadye perusa suathu. Back straight-ah irukkanum boss.',
            commonMistakes: [
              'Bending elbows instead of keeping arms fully extended',
              'Arching lower back and swinging torso',
              'Moving too fast without controlling rotation'
            ],
            category: 'warmup'
          },
          {
            id: 'mon-w2',
            name: 'Push-Up Walkouts (Inchworms)',
            targetMuscle: 'Hamstrings, Shoulders & Core',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '10 Reps',
            restSeconds: 30,
            formGuide: [
              'Hinge at hips with straight legs until hands reach the floor.',
              'Walk hands forward into a rigid high plank position.',
              'Walk feet towards hands while maintaining straight knees.'
            ],
            tanglishTip: 'Kal nadungaama stoop panni kaila nadandhu plank position-ku po, thirumba kaila nadandhu straight-ah nilu.',
            commonMistakes: [
              'Allowing lower back to sag toward floor in plank',
              'Bending knees excessively during walkout',
              'Rushing the hand walk without bracing core'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'Upper Abdominal & Gut Burn',
        durationMinutes: 10,
        description: 'Targeted abdominal fat-burn, rectus abdominis crunching, and core stability.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'mon-c1',
            name: 'Abdominal Crunches',
            targetMuscle: 'Upper Rectus Abdominis',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: '5 kg plate on chest', pro: '10 kg plate on chest' },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Lie supine with knees bent at 90 degrees and feet flat.',
              'Flex abdominals to raise shoulder blades 4 inches off the floor.',
              'Exhale sharply at top contraction; do not yank the neck.'
            ],
            tanglishTip: 'Vayiru tight-ah vachuko, kaluthu pidikkaama upper body mattum light-ah mela thooki breathe out pannu.',
            commonMistakes: [
              'Yanking on neck with hands causing cervical strain',
              'Lifting full lower back off mat into a full sit-up',
              'Rushing reps without a 1-sec peak contraction'
            ],
            category: 'gut'
          },
          {
            id: 'mon-c2',
            name: 'Standard High Plank Hold',
            targetMuscle: 'Transverse Abdominis & Core',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '45 Seconds', intermediate: '60 Seconds', pro: '75 Seconds' },
            sets: 3,
            repsOrDuration: '45-75 Seconds',
            restSeconds: 45,
            formGuide: [
              'Place palms directly underneath shoulders with arms locked.',
              'Squeeze glutes and quads to create a rigid straight line.',
              'Pull navel firmly up towards spine; breathe steadily.'
            ],
            tanglishTip: 'Kaiya shoulder-ku keeazha vachuko, glutes-ah squeeze panni mudugula straight line maintain pannu. Shake aanaalum hold pannu!',
            commonMistakes: [
              'Allowing hips to sag down into hyper-extension',
              'Piking hips up high into an inverted V-shape',
              'Holding breath instead of diaphragmatic breathing'
            ],
            category: 'gut'
          },
          {
            id: 'mon-c3',
            name: 'High-Intensity Mountain Climbers',
            targetMuscle: 'Lower Abs, Obliques & Cardio',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '30 Seconds', intermediate: '45 Seconds', pro: '60 Seconds' },
            sets: 3,
            repsOrDuration: '35 Seconds active',
            restSeconds: 30,
            formGuide: [
              'Start in a push-up position with arms braced.',
              'Drive knees rapidly towards chest in alternating sprints.',
              'Keep hips level without bouncing up and down.'
            ],
            tanglishTip: 'Plank-la ninnu knee-va fast-ah chest nokki drive pannu. Fast-ah panna vayiru belly fat nalla burn aagum!',
            commonMistakes: [
              'Bouncing hips up and down during rapid sprints',
              'Hands drifting far in front of shoulder level',
              'Not bringing knees all the way up under chest'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Chest & Triceps Resistance',
        durationMinutes: 30,
        description: 'Heavy compound press loading followed by triceps mechanical isolation.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'mon-m1',
            name: 'Flat Bench Press',
            targetMuscle: 'Mid & Lower Pectoralis Major',
            primaryMuscleGroup: 'chest',
            equipment: 'Flat Bench + Barbell / Two Dumbbells',
            weights: { 
              beginner: '5–7.5 kg DBs or empty bar (RPE 5)', 
              intermediate: '12.5–17.5 kg DBs / 50 kg Barbell (RPE 7)', 
              pro: '22.5 kg+ DBs / 80 kg+ Barbell (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '10 Reps',
            restSeconds: 75,
            formGuide: [
              'Plant feet flat, arch upper back slightly, retract scapulae.',
              'Lower bar to sternum with elbows tucked at 45 degrees.',
              'Drive bar explosively up over chest while pressing feet down.'
            ],
            tanglishTip: 'Flat bench-la paduthuko, dumbbell-ah chest level-ku nerah mela push pannu, elbow-va romba virikkaama 45-degree-la vachuko.',
            commonMistakes: [
              'Flaring elbows out to 90 degrees risking shoulder joint impingement',
              'Bouncing barbell heavily off sternum at bottom',
              'Lifting butt off bench during heavy drive'
            ],
            category: 'weights'
          },
          {
            id: 'mon-m2',
            name: 'Incline Dumbbell Press',
            targetMuscle: 'Upper Pectoralis & Front Deltoid',
            primaryMuscleGroup: 'chest',
            equipment: 'Incline Bench (30°) + Two Dumbbells',
            weights: { 
              beginner: '5–7.5 kg DBs (RPE 5)', 
              intermediate: '14–18 kg DBs (RPE 7)', 
              pro: '24 kg+ DBs (RPE 8.5)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Set bench angle to 30-45 degrees to target collarbone chest.',
              'Lower dumbbells with control until thumbs align with upper chest.',
              'Press weights straight up over eyes without clinking dumbbells.'
            ],
            tanglishTip: 'Bench-ah 30-degree incline-la set pannuko. Upper chest-ku dumbbell-ah mela push panni, keeazha slow-ah control-ah irakku.',
            commonMistakes: [
              'Setting bench angle too steep (>60°) shifting weight to shoulders',
              'Banging dumbbells together violently at top',
              'Dropping dumbbells too quickly on eccentric phase'
            ],
            category: 'weights'
          },
          {
            id: 'mon-m3',
            name: 'Cable Crossover / Pec Deck Fly',
            targetMuscle: 'Inner Chest Squeeze & Isolation',
            primaryMuscleGroup: 'chest',
            equipment: 'Cable Crossover Station or Pec Deck Machine',
            weights: { 
              beginner: '10–15 kg stack (RPE 5)', 
              intermediate: '25–35 kg stack (RPE 7)', 
              pro: '45 kg+ stack (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Maintain a soft bend in elbows like hugging a large tree trunk.',
              'Bring handles together in front of sternum and pause 1 sec.',
              'Control 3-second stretch phase feeling pectoral extension.'
            ],
            tanglishTip: 'Elbow-va light-ah bend panni, oru periya maratha hug panra maadhiri kaila weight-ah serthu chest-ah nalla squeeze pannu.',
            commonMistakes: [
              'Bending and straightening elbows pressing weight like a press',
              'Letting weight pull shoulders out of socket at stretch',
              'Using momentum and leaning body forward'
            ],
            category: 'weights'
          },
          {
            id: 'mon-m4',
            name: 'Tricep Rope Pushdowns',
            targetMuscle: 'Triceps Lateral & Medial Head',
            primaryMuscleGroup: 'triceps',
            equipment: 'High Cable Station + Rope Attachment',
            weights: { 
              beginner: '7.5–12.5 kg stack (RPE 5)', 
              intermediate: '17.5–25 kg stack (RPE 7.5)', 
              pro: '30 kg+ stack (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Pin elbows tight against your ribs throughout movement.',
              'Push rope down and flare wrists outward at peak extension.',
              'Slowly return rope up to chest level without moving upper arms.'
            ],
            tanglishTip: 'Elbow-va body-yoda tight-ah otti vachuko. Rope-ah keeazha thallum bodhu veliya spread panni triceps-ah tight pannu.',
            commonMistakes: [
              'Allowing elbows to flare forward and backward off ribs',
              'Using shoulder momentum to press weight down',
              'Not spreading rope ends apart at peak contraction'
            ],
            category: 'weights'
          },
          {
            id: 'mon-m5',
            name: 'Overhead Dumbbell Tricep Extension',
            targetMuscle: 'Triceps Long Head',
            primaryMuscleGroup: 'triceps',
            equipment: 'Flat Bench + One Dumbbell',
            weights: { 
              beginner: '6–8 kg DB (RPE 5)', 
              intermediate: '14–18 kg DB (RPE 7.5)', 
              pro: '24 kg+ DB (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Cup hands around inner plate of dumbbell overhead.',
              'Lower weight deep behind head while keeping elbows pointing up.',
              'Extend dumbbell overhead to full contraction without flaring elbows.'
            ],
            tanglishTip: 'Bench-la ukkandhu dumbbell-ah thalaikku pinnaala keeazha irakki, triceps power-la straight-ah mela thooku.',
            commonMistakes: [
              'Flaring elbows out sideways putting stress on shoulder joint',
              'Not lowering weight deep enough behind head for full stretch',
              'Arching lower back excessively when weight goes behind head'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Static Stretching & Recovery',
        durationMinutes: 10,
        description: 'Passive chest stretching, triceps release, and heart-rate normalization.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'mon-co1',
            name: 'Chest Doorway Stretch',
            targetMuscle: 'Pectoralis Major & Minor',
            primaryMuscleGroup: 'chest',
            equipment: 'Doorway Frame / Rig Post',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds per side',
            restSeconds: 15,
            formGuide: [
              'Place forearm against doorway frame at 90-degree angle.',
              'Step forward with one leg and lean torso gently into stretch.',
              'Hold stretch while taking deep abdominal breaths.'
            ],
            tanglishTip: 'Door frame-la kaiya vachuko, body-ya munnadi lean panni chest muscle stretch aaguradha feel pannu.',
            commonMistakes: [
              'Twisting spine forcefully instead of leaning forward smoothly',
              'Holding breath during static stretch',
              'Placing forearm too high or low off shoulder level'
            ],
            category: 'warmdown'
          },
          {
            id: 'mon-co2',
            name: 'Child’s Pose & Deep Breathing',
            targetMuscle: 'Lats, Lower Back & Parasympathetic',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '60 Seconds',
            restSeconds: 15,
            formGuide: [
              'Kneel on mat with big toes touching and knees spread wide.',
              'Sit back on heels while reaching fingertips far forward.',
              'Breathe in for 4 seconds, exhale slowly for 6 seconds.'
            ],
            tanglishTip: 'Mat-la kaal mela ukkandhu kaiya munnadi nalla neetiyirukko. Deep-ah moochu ulla izhuthu meedhi stress-ah release pannu.',
            commonMistakes: [
              'Lifting hips off heels during forward reach',
              'Shrugging shoulders up toward ears',
              'Shallow chest breathing instead of deep belly expansion'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  },
  tuesday: {
    day: 'tuesday',
    dayTitle: 'Tuesday: Back & Biceps + Obliques',
    shortTitle: 'Back & Biceps',
    focus: 'Latissimus Dorsi, Rhomboids, Biceps Brachii, Lateral Obliques',
    description: 'Pulling power workout focusing on V-taper lat thickness, bicep peak isolation, and rotational core stability.',
    totalMinutes: 60,
    targetMuscles: ['back', 'biceps', 'obliques'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Spinal Activation & Band Pulls',
        durationMinutes: 10,
        description: 'Prime thoracic spine rotation and activate posterior shoulder rotators.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'tue-w1',
            name: 'Cat-Cow Spinal Flow',
            targetMuscle: 'Thoracic & Lumbar Spine Mobility',
            primaryMuscleGroup: 'back',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '10 Cycles',
            restSeconds: 15,
            formGuide: [
              'Start on all fours with hands under shoulders and knees under hips.',
              'Inhale: arch spine down, push chest forward, look up (Cow).',
              'Exhale: tuck chin, arch spine toward ceiling, contract abs (Cat).'
            ],
            tanglishTip: 'Mudugai poonai maadhiri mela arch panni, apprum maadu maadhiri keeazha bend panni spine flexibility-ya build pannu.',
            commonMistakes: [
              'Rushing through positions without synchronizing breath',
              'Bending elbows during spine movement',
              'Over-extending neck forcibly up or down'
            ],
            category: 'warmup'
          },
          {
            id: 'tue-w2',
            name: 'Band Pull-Aparts',
            targetMuscle: 'Rear Deltoids & Rhomboids',
            primaryMuscleGroup: 'back',
            equipment: 'Light Resistance Band',
            weights: { beginner: 'Light Band', intermediate: 'Medium Band', pro: 'Heavy Band' },
            sets: 2,
            repsOrDuration: '15 Reps',
            restSeconds: 30,
            formGuide: [
              'Hold band at shoulder width with palms facing upward.',
              'Pull arms apart until band touches chest; squeeze shoulder blades.',
              'Control return to starting position without slack.'
            ],
            tanglishTip: 'Resistance band-ah chest-ku straight-ah thooki, shoulder blades-ah rendaiyum pichu serkura maadhiri stretch pannu.',
            commonMistakes: [
              'Shrugging shoulders up toward ears',
              'Arching lower back to force band apart',
              'Snapping band back rapidly without eccentric control'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'Oblique Rotational Stability',
        durationMinutes: 10,
        description: 'Rotary torso exercises for waist tapering, lateral abdominal control, and oblique fat burn.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'tue-c1',
            name: 'Seated Russian Twists',
            targetMuscle: 'Internal & External Obliques',
            primaryMuscleGroup: 'obliques',
            equipment: 'Exercise Mat (+ Dumbbell)',
            weights: { beginner: 'Bodyweight', intermediate: '5 kg DB / Plate', pro: '10 kg DB / Plate' },
            sets: 3,
            repsOrDuration: '20 Total Reps',
            restSeconds: 45,
            formGuide: [
              'Sit on mat, lean back 45 degrees, elevate feet 3 inches.',
              'Rotate shoulders dynamically from left to right touching floor.',
              'Keep eyes following hands to ensure full thoracic rotation.'
            ],
            tanglishTip: 'Floor-la ukkandhu kaala light-ah mela thooki, body-ya left-and-right rotate panni side belly-ya burn pannu.',
            commonMistakes: [
              'Moving arms only without rotating chest and shoulders',
              'Rounding spine excessively into a slouched curve',
              'Dropping feet to mat on every twist'
            ],
            category: 'gut'
          },
          {
            id: 'tue-c2',
            name: 'Bicycle Crunches',
            targetMuscle: 'Obliques & Intercostals',
            primaryMuscleGroup: 'obliques',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Slow & Steady', intermediate: 'Tempo 2-1-2', pro: 'Weighted Ankle Straps' },
            sets: 3,
            repsOrDuration: '20 Total Reps',
            restSeconds: 30,
            formGuide: [
              'Bring opposite elbow to opposite knee while extending free leg straight.',
              'Keep lower back firmly pressed flat against the mat.',
              'Avoid pulling head; rotate through upper torso.'
            ],
            tanglishTip: 'Paduthukittu opposite elbow-va opposite knee-ku touch panra maadhiri cycle pedaling action panni twist pannu.',
            commonMistakes: [
              'Yanking neck forward with hands',
              'Rushing reps without extending opposite leg fully',
              'Arching lower back off mat'
            ],
            category: 'gut'
          },
          {
            id: 'tue-c3',
            name: 'Side Plank Isometric Hold',
            targetMuscle: 'Quadratus Lumborum & Obliques',
            primaryMuscleGroup: 'obliques',
            equipment: 'Exercise Mat',
            weights: { beginner: '30 sec / side', intermediate: '45 sec / side', pro: '60 sec / side' },
            sets: 3,
            repsOrDuration: '35 Seconds per side',
            restSeconds: 30,
            formGuide: [
              'Lie on side supported by forearm with elbow directly below shoulder.',
              'Lift hips off floor until body forms a straight diagonal line.',
              'Squeeze lateral abs and hold without letting hips dip.'
            ],
            tanglishTip: 'Kai mutti mela body-ya side-la thooki, hip drop aagaama straight-ah hold pannu. Side gut nalla tight aagum!',
            commonMistakes: [
              'Allowing hips to sag down toward floor',
              'Rolling chest forward toward floor',
              'Placing supporting elbow too far away from shoulder joint'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Back & Biceps Resistance',
        durationMinutes: 30,
        description: 'Compound vertical & horizontal rows followed by targeted bicep hypertrophy.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'tue-m1',
            name: 'Lat Pulldowns',
            targetMuscle: 'Latissimus Dorsi (Back Width)',
            primaryMuscleGroup: 'back',
            equipment: 'Lat Pulldown Machine + Wide Grip Bar',
            weights: { 
              beginner: '15–25 kg (RPE 5)', 
              intermediate: '35–50 kg (RPE 7)', 
              pro: '65 kg+ (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '10 Reps',
            restSeconds: 75,
            formGuide: [
              'Grip wide bar with thumbs over bar; lean back 10 degrees.',
              'Pull bar straight down to upper chest driving elbows toward hips.',
              'Pause 1 sec at chest before controlling bar back up.'
            ],
            tanglishTip: 'Lat bar-ah upper chest-ku pull panni elbow-va keeazha konduba. Body-ya romba pinnaadi saaikkaadhin.',
            commonMistakes: [
              'Leaning back excessively (>30°) turning pulldown into a row',
              'Pulling bar behind neck risking rotator cuff injury',
              'Using body momentum to yank bar down'
            ],
            category: 'weights'
          },
          {
            id: 'tue-m2',
            name: 'Seated Cable Rows',
            targetMuscle: 'Rhomboids, Mid-Traps & Back Thickness',
            primaryMuscleGroup: 'back',
            equipment: 'Seated Cable Machine + V-Bar Attachment',
            weights: { 
              beginner: '15–25 kg (RPE 5)', 
              intermediate: '35–50 kg (RPE 7)', 
              pro: '65 kg+ (RPE 8.5)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Sit upright with feet braced on pads and knees slightly bent.',
              'Pull V-handle directly to navel, squeezing shoulder blades together.',
              'Avoid swinging lower back; keep torso stationary.'
            ],
            tanglishTip: 'Straight-ah ukkandhu V-bar handle-ah thoppul kittae pull pannu. Back thickness-ku shoulder blade-ah squeeze pannu.',
            commonMistakes: [
              'Swinging lower back back and forth like a rowing boat',
              'Shrugging shoulders up during pulling phase',
              'Not squeezing shoulder blades together at navel contact'
            ],
            category: 'weights'
          },
          {
            id: 'tue-m3',
            name: 'One-Arm Dumbbell Row',
            targetMuscle: 'Lower Lat & Unilateral Back',
            primaryMuscleGroup: 'back',
            equipment: 'Flat Bench + One Dumbbell',
            weights: { 
              beginner: '7.5–10 kg DB (RPE 5)', 
              intermediate: '15–20 kg DB (RPE 7.5)', 
              pro: '26 kg+ DB (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '10 Reps per side',
            restSeconds: 60,
            formGuide: [
              'Support one knee and hand on flat bench; keep flat back.',
              'Pull dumbbell towards hip pocket leading with elbow.',
              'Lower dumbbell until shoulder hangs in full lat stretch.'
            ],
            tanglishTip: 'Bench-la oru kai motti vachuko, dumbbell-ah hip-ku pulling action-la thooku. Elbow straight-ah mela ponum.',
            commonMistakes: [
              'Twisting torso and opening chest upward to cheat weight up',
              'Pulling dumbbell straight to chest instead of hip pocket',
              'Rounding spine during heavy pull'
            ],
            category: 'weights'
          },
          {
            id: 'tue-m4',
            name: 'Barbell / EZ-Bar Standing Curls',
            targetMuscle: 'Biceps Brachii (Short & Long Head)',
            primaryMuscleGroup: 'biceps',
            equipment: 'EZ-Curl Bar or Straight Barbell',
            weights: { 
              beginner: '7.5–12.5 kg bar (RPE 5)', 
              intermediate: '20–30 kg bar (RPE 7.5)', 
              pro: '35 kg+ bar (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Stand shoulder-width apart with elbows tucked against ribs.',
              'Curl bar upwards in a arc until biceps reach full contraction.',
              'Lower bar under 3-second tension without hip momentum.'
            ],
            tanglishTip: 'Elbow-va body-la vachukittu, bar-ah biceps strength-la mela thooku. Hip-ah aattaama strict form-la pannu.',
            commonMistakes: [
              'Swinging hips and shoulders to bounce weight up',
              'Allowing elbows to drift far forward off ribs',
              'Dropping bar rapidly without eccentric muscle tension'
            ],
            category: 'weights'
          },
          {
            id: 'tue-m5',
            name: 'Hammer Dumbbell Curls',
            targetMuscle: 'Brachialis & Forearms',
            primaryMuscleGroup: 'biceps',
            equipment: 'Two Dumbbells',
            weights: { 
              beginner: '5–7.5 kg DBs (RPE 5)', 
              intermediate: '12.5–15 kg DBs (RPE 7)', 
              pro: '20 kg+ DBs (RPE 8.5)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Hold dumbbells with neutral grip (palms facing each other).',
              'Curl weights up towards shoulders like driving nails with a hammer.',
              'Squeeze forearms and brachialis hard at top of motion.'
            ],
            tanglishTip: 'Dumbbell-ah hammer maadhiri thumb mela paarthu hold panni bicep and forearm thickness-ku curl pannu.',
            commonMistakes: [
              'Supinating wrists (rotating palms up) breaking hammer grip',
              'Using body momentum to swing dumbbells',
              'Curling weights inward across chest instead of straight up'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Lat Hang & Decompression',
        durationMinutes: 10,
        description: 'Spinal traction, passive lat decompression, and arm static release.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'tue-co1',
            name: 'Dead Lat Hang from Bar',
            targetMuscle: 'Spinal Decompression & Lat Release',
            primaryMuscleGroup: 'back',
            equipment: 'Pull-up Bar',
            weights: { beginner: 'Passive Hang', intermediate: 'Passive Hang', pro: 'Passive Hang' },
            sets: 2,
            repsOrDuration: '45 Seconds',
            restSeconds: 20,
            formGuide: [
              'Grip overhead pull-up bar with overhand grip.',
              'Relax lower back, legs, and core completely to allow spine traction.',
              'Take deep breaths feeling lat muscles stretch.'
            ],
            tanglishTip: 'Pull-up bar-la verum kaiyaala thongu. Lower back chill-aaga, spine tension elam automatic-ah release aagum.',
            commonMistakes: [
              'Kicking legs or swinging body on bar',
              'Tensing shoulders and neck up toward ears',
              'Holding breath instead of deep breathing'
            ],
            category: 'warmdown'
          },
          {
            id: 'tue-co2',
            name: 'Seated Spinal Twist Stretch',
            targetMuscle: 'Thoracic & Lumbar Rotators',
            primaryMuscleGroup: 'back',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds per side',
            restSeconds: 15,
            formGuide: [
              'Sit with legs straight; bend right knee and place foot over left thigh.',
              'Place left elbow on outside of right knee and twist torso gently.',
              'Hold posture while maintaining tall spine.'
            ],
            tanglishTip: 'Kaala cross panni ukkandhu torso-va side-la twist panni back stiffness-ah release pannu.',
            commonMistakes: [
              'Slouching lower back during twist',
              'Forcing elbow against knee aggressively causing spine strain',
              'Lifting glutes off floor'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  },
  wednesday: {
    day: 'wednesday',
    dayTitle: 'Wednesday: Legs & Calves + Lower Gut',
    shortTitle: 'Legs & Calves',
    focus: 'Quadriceps, Hamstrings, Glutes, Gastrocnemius, Lower Abs',
    description: 'High intensity leg volume focusing on squatting mechanics, posterior hamstring power, and lower ab compression.',
    totalMinutes: 60,
    targetMuscles: ['legs', 'calves', 'abs'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Hip & Ankle Dynamic Mobility',
        durationMinutes: 10,
        description: 'Prepare hip sockets, open ankles, and prime glute activation for squatting.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'wed-w1',
            name: 'Dynamic Leg Swings',
            targetMuscle: 'Hip Flexors & Hamstring Mobility',
            primaryMuscleGroup: 'legs',
            equipment: 'Rig Post / Wall Support',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '15 Swings per leg',
            restSeconds: 15,
            formGuide: [
              'Hold onto post for support while standing tall.',
              'Swing leg smoothly forward and backward in controlled arc.',
              'Maintain tall torso without arching low back.'
            ],
            tanglishTip: 'Suvarukku piranadi ninnu kaala munnadi pinnaadi swing panni hip joint-ah loosen pannu.',
            commonMistakes: [
              'Arching lower back excessively during backward leg swing',
              'Bending support leg knee',
              'Swinging leg violently out of control'
            ],
            category: 'warmup'
          },
          {
            id: 'wed-w2',
            name: 'Bodyweight Deep Squats',
            targetMuscle: 'Ankle Dorsiflexion & Glute Prep',
            primaryMuscleGroup: 'legs',
            equipment: 'Bodyweight',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '12 Reps',
            restSeconds: 30,
            formGuide: [
              'Set feet slightly wider than shoulders with toes angled out 15°.',
              'Sit deep into hips pushing knees out over second toe.',
              'Pause 2 sec at bottom before driving back up.'
            ],
            tanglishTip: 'Foot-ah shoulder width-la vachuko, chair-la ukkarra maadhiri keeazha poittu heel-ah press panni mela vaa.',
            commonMistakes: [
              'Allowing knees to cave inward (valgus collapse)',
              'Lifting heels off floor during deep squat',
              'Rounding upper back and chest collapsing forward'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'Lower Gut & Pelvic Compression',
        durationMinutes: 10,
        description: 'Targeted lower rectus abdominis, hip flexor stabilization, and pelvic tilt training.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'wed-c1',
            name: 'Hanging / Lying Leg Raises',
            targetMuscle: 'Lower Rectus Abdominis',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat or Pull-up Bar',
            weights: { beginner: 'Lying Bent Knee', intermediate: 'Lying Straight Leg', pro: 'Hanging Bar Leg Raises' },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Lie on back (or hang from bar); brace core to flatten lower back.',
              'Raise legs until perpendicular to floor, curling pelvis at top.',
              'Lower legs slowly with control without letting lower back arch.'
            ],
            tanglishTip: 'Paduthukittu kaala straight-ah 90-degree mela thooku. Keezha irakkumbothu mudugu tharaiyil ottirukkanum.',
            commonMistakes: [
              'Arching lower back off mat when lowering legs',
              'Swinging legs on pull-up bar using momentum',
              'Lifting legs with hip flexors only without pelvic curl'
            ],
            category: 'gut'
          },
          {
            id: 'wed-c2',
            name: 'Flutter Kicks',
            targetMuscle: 'Lower Ab Endurance & Hip Flexors',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '30 Seconds', intermediate: '45 Seconds', pro: '60 Seconds' },
            sets: 3,
            repsOrDuration: '40 Seconds active',
            restSeconds: 30,
            formGuide: [
              'Place hands under lower glutes with shoulders slightly raised.',
              'Hover straight legs 6 inches off floor.',
              'Perform rapid, crisp alternating scissor kicks.'
            ],
            tanglishTip: 'Kaala tharaiyila irundhu 6 inch mela thooki, chinna scissor kick fast-ah pannu. Lower belly kandraaviya burn aagum.',
            commonMistakes: [
              'Lifting legs way too high (>45°) losing core tension',
              'Allowing lower back to arch off floor',
              'Bending knees into cycling motion'
            ],
            category: 'gut'
          },
          {
            id: 'wed-c3',
            name: 'Deadbug Isometric Core Crosses',
            targetMuscle: 'Deep Transverse Abdominis & Anti-Extension',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: 'Slow 3-sec hold', pro: 'Weighted Ankle/Wrist' },
            sets: 3,
            repsOrDuration: '12 Reps per side',
            restSeconds: 30,
            formGuide: [
              'Lie on back with arms pointing to ceiling and knees at 90° tabletop.',
              'Lower right arm overhead while extending left leg straight out.',
              'Keep lower back glued to floor throughout movement.'
            ],
            tanglishTip: 'Paduthukittu opposite kai matrum kaala floor-ku neetu. Lower back ground-la flat-ah lock aayirukkanum.',
            commonMistakes: [
              'Lowering arm and leg on same side breaking cross diagonal',
              'Lower back arching off mat during extension',
              'Moving too fast without 1-sec hold'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Legs & Calves Resistance',
        durationMinutes: 30,
        description: 'Barbell compound squat loading, posterior hamstring hinging, and calf overload.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'wed-m1',
            name: 'Barbell / Goblet Squats',
            targetMuscle: 'Quadriceps, Glutes & Adductors',
            primaryMuscleGroup: 'legs',
            equipment: 'Squat Rack + Barbell or Heavy Kettlebell',
            weights: { 
              beginner: '8–12 kg KB / Bodyweight (RPE 5)', 
              intermediate: '40–60 kg Barbell (RPE 7.5)', 
              pro: '90 kg+ Barbell (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '8–10 Reps',
            restSeconds: 90,
            formGuide: [
              'Set feet shoulder-width; brace abdomen like bracing for a punch.',
              'Break at hips and knees simultaneously, sinking thighs parallel to floor.',
              'Drive through mid-foot to stand up, squeezing glutes at top.'
            ],
            tanglishTip: 'Squat rack-la weight-ah shoulder-la vachukittu, butt-ah keeazha thallu. Knee toe-va thaandi pogaama drive pannu.',
            commonMistakes: [
              'Knees collapsing inward (valgus collapse) during drive up',
              'Rising hips faster than chest causing good-morning squat',
              'Rounding lower spine at bottom (butt wink)'
            ],
            category: 'weights'
          },
          {
            id: 'wed-m2',
            name: '45-Degree Leg Press Machine',
            targetMuscle: 'Quad Hypertrophy & Glutes',
            primaryMuscleGroup: 'legs',
            equipment: 'Leg Press Sled Machine',
            weights: { 
              beginner: '40–60 kg sled (RPE 5)', 
              intermediate: '100–140 kg sled (RPE 7.5)', 
              pro: '180 kg+ sled (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 75,
            formGuide: [
              'Place feet shoulder-width on center of footplate.',
              'Lower sled until knees form 90-degree angle without lifting hips.',
              'Press sled back up without locking out knees at top.'
            ],
            tanglishTip: 'Leg press machine-la kaala center-la vachuko, weight-ah keeazha irakki, knee fully lock aagaama mela push pannu.',
            commonMistakes: [
              'Hyperextending and snapping knees locked out at top',
              'Lifting tailbone and lower back off back pad at bottom',
              'Placing feet too low causing knee shear force'
            ],
            category: 'weights'
          },
          {
            id: 'wed-m3',
            name: 'Romanian Deadlifts (RDL)',
            targetMuscle: 'Hamstrings & Glute-Ham Junction',
            primaryMuscleGroup: 'legs',
            equipment: 'Barbell or Two Dumbbells',
            weights: { 
              beginner: '15–25 kg (RPE 5)', 
              intermediate: '40–60 kg (RPE 7.5)', 
              pro: '80 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '10 Reps',
            restSeconds: 75,
            formGuide: [
              'Stand tall with slight knee bend; hinge hips back toward wall.',
              'Lower weight down shins while keeping spine rigid and neutral.',
              'Squeeze glutes to pull hips forward back into standing.'
            ],
            tanglishTip: 'Hip-ah pinnaadi thallu, weight-ah thodai mela keeazha nazaavu. Hamstring nalla stretch aaguradhu theriyum.',
            commonMistakes: [
              'Rounding lower back to reach bar to floor',
              'Bending knees excessively turning exercise into a conventional squat',
              'Bar drifting far away from thighs and shins'
            ],
            category: 'weights'
          },
          {
            id: 'wed-m4',
            name: 'Leg Extension Machine',
            targetMuscle: 'Quadriceps Isolation (Rectus Femoris)',
            primaryMuscleGroup: 'legs',
            equipment: 'Seated Leg Extension Machine',
            weights: { 
              beginner: '15–25 kg (RPE 5)', 
              intermediate: '35–50 kg (RPE 7.5)', 
              pro: '70 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Adjust back pad so knees line up with pivot point of machine.',
              'Extend legs up until straight; squeeze quads at top for 1 full sec.',
              'Lower weight under 3-second control.'
            ],
            tanglishTip: 'Machine-la ukkandhu leg-ah straight-ah mela thooki 1 second quad muscle-ah tight panni vachuko.',
            commonMistakes: [
              'Kicking weight up explosively using hip momentum',
              'Not locking out legs fully to hold peak quad squeeze',
              'Lifting butt off seat pad during heavy extension'
            ],
            category: 'weights'
          },
          {
            id: 'wed-m5',
            name: 'Standing Calf Raises',
            targetMuscle: 'Gastrocnemius & Soleus',
            primaryMuscleGroup: 'calves',
            equipment: 'Calf Block + Smith Machine / Dumbbells',
            weights: { 
              beginner: 'Bodyweight / 10 kg DB (RPE 5)', 
              intermediate: '30–50 kg (RPE 7.5)', 
              pro: '80 kg+ (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Stand on edge of block with heels hanging off edge.',
              'Lower heels deep for maximum Achilles stretch.',
              'Explode up onto tiptoes and pause 2 seconds at peak elevation.'
            ],
            tanglishTip: 'Step edge-la ninnu heel-ah deep-ah keeazha irakki, tiptoe mela thooki calf-ah 2 seconds hold pannu.',
            commonMistakes: [
              'Bouncing rapidly at bottom without full stretch',
              'Bending knees to assist calf extension',
              'Not holding 2-second peak pause on tiptoes'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Pigeon & Hamstring Stretches',
        durationMinutes: 10,
        description: 'Deep hip opener static holds and hamstring muscular recovery.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'wed-co1',
            name: 'Deep Pigeon Stretch',
            targetMuscle: 'Gluteus Medius & Piriformis',
            primaryMuscleGroup: 'legs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds per side',
            restSeconds: 15,
            formGuide: [
              'Bring right leg bent at 90 degrees in front across mat.',
              'Extend left leg straight back behind you; keep hips square.',
              'Fold chest forward over shin to feel deep glute release.'
            ],
            tanglishTip: 'Front leg-ah 90-degree fold panni paduthukko, glutes tension pooraama release aagum.',
            commonMistakes: [
              'Allowing hips to roll out to one side',
              'Bending rear leg knee',
              'Forcing stretch painfully into knee joint'
            ],
            category: 'warmdown'
          },
          {
            id: 'wed-co2',
            name: 'Standing Hamstring Stretch',
            targetMuscle: 'Biceps Femoris & Calves',
            primaryMuscleGroup: 'legs',
            equipment: 'Exercise Mat or Low Bench',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds per side',
            restSeconds: 15,
            formGuide: [
              'Place right heel on low step with leg straight.',
              'Hinge forward at hips keeping back flat until hamstrings stretch.',
              'Flex foot upward to stretch calf muscle simultaneously.'
            ],
            tanglishTip: 'Kaala step mela vachukittu hip-ah bend pannu. Hamstring muscle bayangarama relax aagum.',
            commonMistakes: [
              'Rounding lower back into a slouched curve',
              'Bending stretched knee',
              'Bouncing on stretch instead of holding steady'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  },
  thursday: {
    day: 'thursday',
    dayTitle: 'Thursday: Shoulders & Traps + Core Stability',
    shortTitle: 'Shoulders & Traps',
    focus: 'Anterior, Lateral & Rear Deltoids, Trapezius, Core Anti-Extension',
    description: '360-degree shoulder capping workout focusing on overhead pressing power, lateral raise volume, and deep core bracing.',
    totalMinutes: 60,
    targetMuscles: ['shoulders', 'traps', 'abs'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Rotator Cuff & Torso Sweeps',
        durationMinutes: 10,
        description: 'Mobilize shoulder capsules, fire up rotator cuff, and warm thoracic spine.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'thu-w1',
            name: 'Band Shoulder Dislocations',
            targetMuscle: 'Rotator Cuff & Chest Fascia',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Light Resistance Band / PVC Pipe',
            weights: { beginner: 'Wide Grip Band', intermediate: 'Medium Grip Band', pro: 'Narrow Grip Band' },
            sets: 2,
            repsOrDuration: '12 Reps',
            restSeconds: 15,
            formGuide: [
              'Hold band with wide grip in front of thighs.',
              'Keep arms straight while swinging band over head all the way to lower back.',
              'Reverse path back smoothly without shrugging shoulders.'
            ],
            tanglishTip: 'Band-ah agala vachukittu thalaikku mela pinnaadi eduthukondu vaa. Shoulder joint nalla open aagum.',
            commonMistakes: [
              'Holding grip too narrow forcing elbows to bend',
              'Arching lower back to force band over head',
              'Moving abruptly through tight shoulder spots'
            ],
            category: 'warmup'
          },
          {
            id: 'thu-w2',
            name: 'Standing Torso Rotations',
            targetMuscle: 'Thoracic Mobility & Core Prep',
            primaryMuscleGroup: 'abs',
            equipment: 'Bodyweight',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '20 Total Sweeps',
            restSeconds: 15,
            formGuide: [
              'Stand tall with feet wide and arms bent at chest height.',
              'Pivot on rear foot as you rotate shoulders left and right.',
              'Keep motion smooth and controlled.'
            ],
            tanglishTip: 'Ninnukittu உடம்பை idadhu valadhu rotate panni spine-ah warm up pannu.',
            commonMistakes: [
              'Not pivoting rear foot causing knee shear stress',
              'Rotating lower lumbar spine forcibly instead of thoracic spine',
              'Moving hips wildly out of control'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'Core Anti-Extension & Stability',
        durationMinutes: 10,
        description: 'Advanced abdominal bracing, anti-extension rollouts, and deep hollow body core holds.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'thu-c1',
            name: 'Ab Wheel Rollouts / Plank Walkouts',
            targetMuscle: 'Anti-Extension Abdominal Strength',
            primaryMuscleGroup: 'abs',
            equipment: 'Ab Wheel or Exercise Mat',
            weights: { beginner: 'Plank Walkouts', intermediate: 'Kneeling Ab Rollouts', pro: 'Full Ab Rollouts' },
            sets: 3,
            repsOrDuration: '10 Reps',
            restSeconds: 45,
            formGuide: [
              'Kneel on mat holding ab wheel with arms extended.',
              'Roll forward extending body into a straight line without letting lower back arch.',
              'Pull back using lower abs to start position.'
            ],
            tanglishTip: 'Wheel-ah munnadi roll panni mudugu vallaama vayirala tight panni thirumba pull pannu.',
            commonMistakes: [
              'Allowing lower back to sag and arch painfully at extension',
              'Pulling wheel back using hip flexors or arms instead of abs',
              'Rolling out beyond core strength control'
            ],
            category: 'gut'
          },
          {
            id: 'thu-c2',
            name: 'Bird-Dog Stability Holds',
            targetMuscle: 'Posterior Chain & Core Stability',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: '2-sec hold at peak', pro: '5-sec hold at peak' },
            sets: 3,
            repsOrDuration: '10 Reps per side',
            restSeconds: 30,
            formGuide: [
              'Start on hands and knees with flat back.',
              'Extend right arm forward and left leg back until parallel to floor.',
              'Hold 2 seconds keeping hips square before alternating.'
            ],
            tanglishTip: 'Opposite kai kaala straight-ah neetti, hips straight-ah balance panni 2 seconds hold pannu.',
            commonMistakes: [
              'Tilting and rotating hips to one side',
              'Kicking leg way above hip height arching lower back',
              'Rushing rep without 2-sec peak hold'
            ],
            category: 'gut'
          },
          {
            id: 'thu-c3',
            name: 'Hollow Body Hold',
            targetMuscle: 'Gymnastic Core Activation & Transverse Abdominis',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '30 Seconds (knees bent)', intermediate: '45 Seconds', pro: '60 Seconds' },
            sets: 3,
            repsOrDuration: '35 Seconds hold',
            restSeconds: 45,
            formGuide: [
              'Lie flat on back; press lower spine flat into the floor.',
              'Raise arms overhead and lift legs 4 inches up into banana shape.',
              'Maintain tight abdominal tension throughout hold.'
            ],
            tanglishTip: 'Body-ya banana shape-la floor-la hover panni deep core tension-ah continuous-ah maintain pannu.',
            commonMistakes: [
              'Lower back peeling off mat creating a gap',
              'Lifting head and strain neck forward',
              'Lifting legs too high losing core compression'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Shoulders & Traps Resistance',
        durationMinutes: 30,
        description: 'Heavy seated dumbbell overhead presses, lateral deltoid caps, face pulls, and heavy shrugs.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'thu-m1',
            name: 'Seated Dumbbell Overhead Press',
            targetMuscle: 'Anterior Deltoid & Shoulder Width',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Adjustable Bench (80°) + Two Dumbbells',
            weights: { 
              beginner: '6–8 kg DBs (RPE 5)', 
              intermediate: '14–18 kg DBs (RPE 7.5)', 
              pro: '24 kg+ DBs (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '10 Reps',
            restSeconds: 75,
            formGuide: [
              'Sit on bench set at near vertical angle (80°); place dumbbells at ear level.',
              'Press weights straight up overhead until palms almost touch.',
              'Lower dumbbells under control back to ear level.'
            ],
            tanglishTip: 'Bench-la straight-ah ukkandhu, dumbbell-ah shoulder ku mela straight-ah thooku. Keezha kondu varumbothu slow-ah control panni irakku.',
            commonMistakes: [
              'Arching lower back off bench to incline press weight',
              'Dropping dumbbells too deep below ear height straining rotator cuff',
              'Clinking dumbbells together violently overhead'
            ],
            category: 'weights'
          },
          {
            id: 'thu-m2',
            name: 'Standing Dumbbell Lateral Raises',
            targetMuscle: 'Lateral Deltoid (Side Cap Width)',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Two Dumbbells',
            weights: { 
              beginner: '3–5 kg DBs (RPE 5)', 
              intermediate: '8–10 kg DBs (RPE 7.5)', 
              pro: '14 kg+ DBs (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Stand tall with dumbbells at sides and elbows slightly soft.',
              'Raise arms out to sides to shoulder height like pouring tea pitchers.',
              'Pause 1 sec at top before lowering under strict tension.'
            ],
            tanglishTip: 'Dumbbell-ah side-la shoulder height-ku thooku. Tea pouring action maadhiri pinky-ya light-ah mela saai.',
            commonMistakes: [
              'Shrugging traps up toward ears taking tension off deltoids',
              'Swinging dumbbells with leg and hip momentum',
              'Raising dumbbells above shoulder level risking shoulder pinch'
            ],
            category: 'weights'
          },
          {
            id: 'thu-m3',
            name: 'Front Weight Plate Raises',
            targetMuscle: 'Anterior Deltoid & Upper Pectoral',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Weight Plate (5-20 kg)',
            weights: { 
              beginner: '5 kg Plate (RPE 5)', 
              intermediate: '10–15 kg Plate (RPE 7)', 
              pro: '20 kg Plate (RPE 8.5)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Grip weight plate at 3 o’clock and 9 o’clock positions.',
              'Raise plate straight in front up to eye level.',
              'Control 2-second eccentric lowering without swinging hips.'
            ],
            tanglishTip: 'Weight plate-ah eye level-ku mela thooki front delt muscle-ah hit pannu.',
            commonMistakes: [
              'Leaning torso backward to sling weight plate up',
              'Bending elbows converting raise into a press',
              'Dropping plate rapidly on eccentric descent'
            ],
            category: 'weights'
          },
          {
            id: 'thu-m4',
            name: 'Reverse Pec Deck / Cable Face Pulls',
            targetMuscle: 'Rear Deltoid & External Rotators',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Reverse Pec Deck or Cable Station + Rope',
            weights: { 
              beginner: '10–15 kg (RPE 5)', 
              intermediate: '25–35 kg (RPE 7.5)', 
              pro: '45 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Pull cable rope toward forehead while flaring elbows high and back.',
              'Separate rope ends at forehead level to engage rear delts.',
              'Pause 1 sec in peak contraction.'
            ],
            tanglishTip: 'Rope-ah mugathukku munnadi pulling panni rear delts-ah squeeze pannu.',
            commonMistakes: [
              'Pulling rope down toward chest instead of forehead',
              'Dropping elbows low turning pull into a lat row',
              'Leaning back using body weight'
            ],
            category: 'weights'
          },
          {
            id: 'thu-m5',
            name: 'Heavy Dumbbell Shrugs',
            targetMuscle: 'Upper Trapezius Strength & Thickness',
            primaryMuscleGroup: 'traps',
            equipment: 'Two Dumbbells',
            weights: { 
              beginner: '10–14 kg DBs (RPE 5)', 
              intermediate: '20–26 kg DBs (RPE 7.5)', 
              pro: '32 kg+ DBs (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Hold heavy dumbbells at sides with arms fully extended.',
              'Shrug shoulders straight up toward ears (do not roll shoulders).',
              'Squeeze traps at top for 2 full seconds before lowering.'
            ],
            tanglishTip: 'Shoulder-ah kaadhu kitta mela thooki traps-ah tight panni 2 seconds vachuko.',
            commonMistakes: [
              'Rolling shoulders in circular motion risking rotator cuff grind',
              'Bending elbows to pull dumbbells up with biceps',
              'Not holding 2-second peak squeeze at top'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Shoulder & Neck Release',
        durationMinutes: 10,
        description: 'Cross-body shoulder capsule stretch and gentle cervical neck muscle release.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'thu-co1',
            name: 'Cross-Body Shoulder Stretch',
            targetMuscle: 'Posterior Deltoid & Capsule',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Bodyweight',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds per arm',
            restSeconds: 15,
            formGuide: [
              'Pull right arm horizontally across chest using left forearm.',
              'Keep shoulder blade pulled down away from ear.',
              'Breathe deeply into back of shoulder.'
            ],
            tanglishTip: 'Kaiya chest cross panni pull panni shoulder joint-ah relax pannu.',
            commonMistakes: [
              'Shrugging stretched shoulder up toward ear',
              'Twisting torso to follow arm instead of keeping chest forward',
              'Pulling directly on elbow joint'
            ],
            category: 'warmdown'
          },
          {
            id: 'thu-co2',
            name: 'Gentle Neck Release Stretch',
            targetMuscle: 'Upper Trapezius & Levator Scapulae',
            primaryMuscleGroup: 'traps',
            equipment: 'Bodyweight',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '30 Seconds per side',
            restSeconds: 15,
            formGuide: [
              'Sit upright; lower right ear toward right shoulder.',
              'Place right hand gently on top of head for light pressure.',
              'Reach left arm down toward floor to lengthen trap stretch.'
            ],
            tanglishTip: 'Thalaiya side-la saaichu trap muscle tension-ah complete-ah release pannu.',
            commonMistakes: [
              'Yanking head forcefully downward',
              'Slouching upper spine',
              'Holding breath during neck tension release'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  },
  friday: {
    day: 'friday',
    dayTitle: 'Friday: Full Body Compound / Functional Strength + HIIT Gut',
    shortTitle: 'Full Body Compound',
    focus: 'Total Body Posterior Chain, Pulling, Pushing & HIIT Core',
    description: 'High-power functional conditioning workout combining deadlifts, pull-ups, kettlebell swings, and HIIT ab burn.',
    totalMinutes: 60,
    targetMuscles: ['fullbody', 'back', 'chest', 'abs'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Cardio Elevation & Mobility',
        durationMinutes: 10,
        description: 'Elevate core body temperature and open hip/spine mobility for multi-joint deadlifts.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'fri-w1',
            name: 'Dynamic Jumping Jacks',
            targetMuscle: 'Full Body Warm-up & Heart Rate',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Bodyweight',
            weights: { beginner: '45 Seconds', intermediate: '60 Seconds', pro: '75 Seconds' },
            sets: 2,
            repsOrDuration: '45 Seconds active',
            restSeconds: 20,
            formGuide: [
              'Jump feet wide while raising hands above head.',
              'Stay light on balls of feet in rhythmic flow.',
              'Maintain steady breathing pattern.'
            ],
            tanglishTip: 'Kaal matrum kaiya serthu mela thooki jump pannu. Full body sweating start aagum.',
            commonMistakes: [
              'Landing heavily on flat heels instead of forefeet',
              'Bending knees outward irregularly',
              'Holding breath during cardio jumps'
            ],
            category: 'warmup'
          },
          {
            id: 'fri-w2',
            name: 'World’s Greatest Stretch',
            targetMuscle: 'Hips, Thoracic Spine & Hamstrings',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Bodyweight', intermediate: 'Bodyweight', pro: 'Bodyweight' },
            sets: 2,
            repsOrDuration: '5 Reps per side',
            restSeconds: 20,
            formGuide: [
              'Step into deep forward lunge with right leg; place left hand on floor.',
              'Rotate right elbow down to instep, then reach right arm to ceiling.',
              'Step back and alternate sides.'
            ],
            tanglishTip: 'Deep lunge panni kaiya ceiling nokki twist pannu. Hips matrum spine supreme-ah open aagum.',
            commonMistakes: [
              'Rear knee collapsing onto floor',
              'Not rotating thoracic spine fully upward',
              'Rushing through positions without pausing'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'HIIT Gut & Metabolic Burn',
        durationMinutes: 10,
        description: 'Explosive high-intensity metabolic ab routines for total gut conditioning and fat shred.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'fri-c1',
            name: 'Athletic Burpees',
            targetMuscle: 'Full Body HIIT Core & Fat Burn',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '8 Reps (no push-up)', intermediate: '10 Standard Burpees', pro: '12 Explosive Tuck Burpees' },
            sets: 3,
            repsOrDuration: '10 Reps',
            restSeconds: 45,
            formGuide: [
              'Drop palms to mat, kick feet back into high plank.',
              'Perform push-up (optional), snap feet back under hips.',
              'Explode vertically overhead with hands reaching high.'
            ],
            tanglishTip: 'Floor-la paduthu push-up panni, knee-va thooki mela jump pannu. Fat burn powerhouse exercise idhu!',
            commonMistakes: [
              'Allowing lower back to arch excessively when kicking back to plank',
              'Landing with stiff locked knees on jump landing',
              'Piking hips into high V in plank'
            ],
            category: 'gut'
          },
          {
            id: 'fri-c2',
            name: 'Explosive High Knees Sprint',
            targetMuscle: 'Lower Ab Acceleration & Cardio',
            primaryMuscleGroup: 'abs',
            equipment: 'Bodyweight',
            weights: { beginner: '30 Seconds', intermediate: '45 Seconds', pro: '60 Seconds' },
            sets: 3,
            repsOrDuration: '35 Seconds active',
            restSeconds: 30,
            formGuide: [
              'Run in place driving knees up to hip level rapidly.',
              'Pump arms in opposition with high intensity.',
              'Land softly on forefeet.'
            ],
            tanglishTip: 'Spot-la ninnu knee-va hip height-ku fast-ah thooki run pannu.',
            commonMistakes: [
              'Leaning torso backward away from knees',
              'Kicking feet backward toward glutes instead of driving knees up',
              'Landing on heels pounding joints'
            ],
            category: 'gut'
          },
          {
            id: 'fri-c3',
            name: 'V-Ups / Jackknife Crunches',
            targetMuscle: 'Full Abdominal Compression',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Tuck V-Ups', intermediate: 'Straight Leg V-Ups', pro: 'Weighted V-Ups' },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 45,
            formGuide: [
              'Lie flat on back with arms extended overhead.',
              'Simultaneously lift straight legs and torso to meet at top in V-shape.',
              'Lower back to floor under control without letting heels touch.'
            ],
            tanglishTip: 'Kai kaala serthu V-shape-la mela thooki stomach-ah complete-ah squeeze pannu.',
            commonMistakes: [
              'Bending knees turning V-up into a bicycle',
              'Using momentum to sling upper body up',
              'Bouncing lower back on mat descent'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Functional Strength Resistance',
        durationMinutes: 30,
        description: 'Compound deadlifts, machine incline press, assisted pull-ups, kettlebell swings, and loaded carries.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'fri-m1',
            name: 'Conventional Deadlifts / Rack Pulls',
            targetMuscle: 'Posterior Chain, Glutes & Spinal Erectors',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Barbell + Heavy Weight Plates',
            weights: { 
              beginner: '20–30 kg Barbell (RPE 5)', 
              intermediate: '60–90 kg Barbell (RPE 7.5)', 
              pro: '120 kg+ Barbell (RPE 9)' 
            },
            sets: 4,
            repsOrDuration: '6 Reps',
            restSeconds: 90,
            formGuide: [
              'Stand with bar over mid-foot; grip bar shoulder-width outside knees.',
              'Wedge hips down, chest up, pull slack out of bar.',
              'Drive floor away with legs to lock out hips seamlessly.'
            ],
            tanglishTip: 'Barbell-ah shin kitta vachukittu, hip-ah push panni straight-ah thooku. Core steel maadhiri tight-ah irukanum.',
            commonMistakes: [
              'Rounding lumbar spine during pull-off floor risking disc herniation',
              'Hyperextending lower back at top lockout',
              'Bar drifting forward away from shins'
            ],
            category: 'weights'
          },
          {
            id: 'fri-m2',
            name: 'Incline Chest Press Machine',
            targetMuscle: 'Upper Pectorals & Front Deltoids',
            primaryMuscleGroup: 'chest',
            equipment: 'Incline Press Machine',
            weights: { 
              beginner: '15–25 kg (RPE 5)', 
              intermediate: '40–60 kg (RPE 7.5)', 
              pro: '80 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '10 Reps',
            restSeconds: 60,
            formGuide: [
              'Adjust seat height so handles line up with upper chest.',
              'Press handles explosively forward to extension.',
              'Control 3-second return stretch.'
            ],
            tanglishTip: 'Machine-la push panni upper chest power build pannu.',
            commonMistakes: [
              'Seat height too low forcing handles above shoulder height',
              'Locking out elbows forcefully snapping joint',
              'Lifting upper back off pad during push'
            ],
            category: 'weights'
          },
          {
            id: 'fri-m3',
            name: 'Assisted / Weighted Pull-ups',
            targetMuscle: 'Latissimus Dorsi & Upper Pulling',
            primaryMuscleGroup: 'back',
            equipment: 'Pull-up Bar / Assisted Pull-up Machine',
            weights: { 
              beginner: '-25 kg Assist Machine (RPE 5)', 
              intermediate: 'Bodyweight (RPE 7.5)', 
              pro: '+10–15 kg Belt (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '8–10 Reps',
            restSeconds: 75,
            formGuide: [
              'Grip pull-up bar slightly wider than shoulders.',
              'Pull chin over bar while driving elbows into back pockets.',
              'Lower to full arm extension at bottom.'
            ],
            tanglishTip: 'Bar-la chin mela pora maadhiri back power-la pull pannu.',
            commonMistakes: [
              'Kipping legs or swinging body momentum on bar',
              'Not reaching full arm hang extension at bottom',
              'Reaching chin up with neck instead of driving chest to bar'
            ],
            category: 'weights'
          },
          {
            id: 'fri-m4',
            name: 'Kettlebell Swings',
            targetMuscle: 'Glute Hinge & Explosive Core',
            primaryMuscleGroup: 'legs',
            equipment: 'Heavy Kettlebell',
            weights: { 
              beginner: '8–12 kg KB (RPE 5)', 
              intermediate: '16–20 kg KB (RPE 7.5)', 
              pro: '28–32 kg KB (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 60,
            formGuide: [
              'Hinge at hips to swing kettlebell between thighs.',
              'Snap hips forward violently to float weight up to chest height.',
              'Let gravity bring bell down into next hip hinge.'
            ],
            tanglishTip: 'Hip hinge panni kettlebell-ah chest level-ku snap panni swing pannu.',
            commonMistakes: [
              'Squatting deep instead of hinging hips back',
              'Lifting bell with shoulders/arms instead of explosive hip drive',
              'Hyperextending spine at top of swing'
            ],
            category: 'weights'
          },
          {
            id: 'fri-m5',
            name: 'Farmer’s Walk Loaded Carry',
            targetMuscle: 'Grip Strength, Core & Traps',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Two Heavy Dumbbells or Kettlebells',
            weights: { 
              beginner: '10–14 kg DBs (RPE 5)', 
              intermediate: '20–26 kg DBs (RPE 7.5)', 
              pro: '32 kg+ DBs (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '40 Meter Walk',
            restSeconds: 60,
            formGuide: [
              'Pick up heavy dumbbells with flat back.',
              'Stand tall with shoulders pulled back and chest puffed out.',
              'Walk with short, crisp strides without leaning side-to-side.'
            ],
            tanglishTip: 'Heavy dumbbells-ah thookukittu straight-ah nadandhu grip and trap stability-ya increase pannu.',
            commonMistakes: [
              'Slouching shoulders forward and rounding upper back',
              'Swaying or waddling side-to-side while walking',
              'Looking down at feet instead of straight ahead'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Deep Squat & Cobra Stretch',
        durationMinutes: 10,
        description: 'Decompress hips, open spine extension, and cool down heart rate.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'fri-co1',
            name: 'Deep Squat Hold (Malasana)',
            targetMuscle: 'Hip Capsule & Ankle Decompression',
            primaryMuscleGroup: 'legs',
            equipment: 'Bodyweight',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '60 Seconds hold',
            restSeconds: 20,
            formGuide: [
              'Sink into deep bottom squat with feet flat.',
              'Press elbows against inner knees with palms together.',
              'Keep chest lifted and spine elongated.'
            ],
            tanglishTip: 'Bottom squat-la ukkandhu hip joint-ah deep-ah stretch panni release pannu.',
            commonMistakes: [
              'Lifting heels off floor due to tight ankles',
              'Collapsing upper back into a slouched curve',
              'Holding breath during deep hip hold'
            ],
            category: 'warmdown'
          },
          {
            id: 'fri-co2',
            name: 'Cobra Pose Abdominal Stretch',
            targetMuscle: 'Abdominal Wall & Lumbar Spine',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Passive Hold', intermediate: 'Passive Hold', pro: 'Passive Hold' },
            sets: 2,
            repsOrDuration: '45 Seconds',
            restSeconds: 15,
            formGuide: [
              'Lie face down; place palms underneath shoulders.',
              'Press chest up extending arms while keeping pelvis on floor.',
              'Breathe deeply stretching front abdominal muscles.'
            ],
            tanglishTip: 'Floor-la paduthu chest-ah mela thooki stomach-ah stretch pannu.',
            commonMistakes: [
              'Lifting pelvis completely off floor',
              'Jamming lower back forcibly into extension',
              'Shrugging shoulders up toward ears'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  },
  saturday: {
    day: 'saturday',
    dayTitle: 'Saturday: Active Conditioning, Arms Pump & Deep Core',
    shortTitle: 'Conditioning & Arms',
    focus: 'Arms Hypertrophy, Lateral Shoulders, Deep Abdominal Vacuum',
    description: 'Arm pump overload, conditioning warmth, rotational cable woodchoppers, and deep vacuum core training.',
    totalMinutes: 60,
    targetMuscles: ['biceps', 'triceps', 'shoulders', 'abs'],
    phases: [
      {
        phaseNumber: 1,
        title: 'Daily Warm-up',
        subtitle: 'Conditioning Warmth',
        durationMinutes: 10,
        description: 'Brisk cardio conditioning warm-up to ignite metabolic system and increase blood flow.',
        badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
        exercises: [
          {
            id: 'sat-w1',
            name: 'Jump Rope / Brisk Incline Treadmill',
            targetMuscle: 'Cardiovascular Elevation & Calves',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Jump Rope or Treadmill (12% Incline)',
            weights: { beginner: '3 mins light walk/jump', intermediate: '4 mins steady jump', pro: '5 mins interval jump' },
            sets: 2,
            repsOrDuration: '3 Minutes',
            restSeconds: 30,
            formGuide: [
              'Maintain light rhythm bounding on balls of feet.',
              'Keep elbows tight to ribs when turning rope.',
              'Breathe rhythmically.'
            ],
            tanglishTip: 'Jump rope or incline treadmill-la body temperature-ah ignite pannu.',
            commonMistakes: [
              'Jumping too high off floor creating high impact',
              'Flaring arms wide away from body',
              'Landing on flat heels'
            ],
            category: 'warmup'
          }
        ]
      },
      {
        phaseNumber: 2,
        title: 'Core & Gut Exercises',
        subtitle: 'Woodchoppers & Vacuum Holds',
        durationMinutes: 10,
        description: 'Transverse core woodchopping, lower pelvic curls, and deep stomach vacuum holds for waist compression.',
        badgeColor: 'border-red-500/30 text-red-400 bg-red-500/10',
        exercises: [
          {
            id: 'sat-c1',
            name: 'High-to-Low Cable Woodchoppers',
            targetMuscle: 'Transverse Abdominis & Obliques',
            primaryMuscleGroup: 'obliques',
            equipment: 'Cable Station + D-Handle Attachment',
            weights: { beginner: '5–7.5 kg (RPE 5)', intermediate: '12.5–17.5 kg (RPE 7.5)', pro: '25 kg+ (RPE 9)' },
            sets: 3,
            repsOrDuration: '12 Reps per side',
            restSeconds: 45,
            formGuide: [
              'Attach handle to high pulley; grip with both hands overhead.',
              'Pull handle diagonally down across body toward far knee.',
              'Rotate torso dynamically pivoting on back foot.'
            ],
            tanglishTip: 'Cable handle-ah top-la irundhu diagonal-ah keeazha cut panra maadhiri pull panni obliques-ah hit pannu.',
            commonMistakes: [
              'Bending elbows pulling cable like an arm press',
              'Not pivoting back foot straining knee joint',
              'Using arm momentum instead of twisting core'
            ],
            category: 'gut'
          },
          {
            id: 'sat-c2',
            name: 'Reverse Abdominal Crunches',
            targetMuscle: 'Lower Abdominal Curling',
            primaryMuscleGroup: 'abs',
            equipment: 'Exercise Mat',
            weights: { beginner: '12 Reps', intermediate: '15 Reps', pro: '20 Reps' },
            sets: 3,
            repsOrDuration: '15 Reps',
            restSeconds: 45,
            formGuide: [
              'Lie flat on mat with knees bent at 90 degrees.',
              'Flex lower abs to pull knees toward chest, lifting pelvis off floor.',
              'Lower hips back to floor with strict control.'
            ],
            tanglishTip: 'Leg-ah mela thooki hip-ah curl panni lower gut-ah tone pannu.',
            commonMistakes: [
              'Swinging legs forcefully using hip flexor momentum',
              'Not curling pelvis off floor at top',
              'Slamming lower back down on mat descent'
            ],
            category: 'gut'
          },
          {
            id: 'sat-c3',
            name: 'Abdominal Vacuum Holds',
            targetMuscle: 'Deep Transverse Abdominis Squeeze',
            primaryMuscleGroup: 'abs',
            equipment: 'Standing or Quadruped',
            weights: { beginner: '15 sec hold', intermediate: '20 sec hold', pro: '30 sec hold' },
            sets: 3,
            repsOrDuration: '20 Seconds hold',
            restSeconds: 30,
            formGuide: [
              'Exhale all air completely out of lungs.',
              'Pull navel forcefully inward toward spine like sucking in waist.',
              'Hold vacuum while taking shallow breaths; relax slowly.'
            ],
            tanglishTip: 'Moochu pooraa veliya vittu, vayitha spine kitta nalla ulla izhuthu hold pannu. Waist slim aagum!',
            commonMistakes: [
              'Not exhaling all air out of lungs before vacuum hold',
              'Pushing stomach outward instead of sucking inward to spine',
              'Holding breath into gasping exhaustion'
            ],
            category: 'gut'
          }
        ]
      },
      {
        phaseNumber: 3,
        title: 'Main Weight Training',
        subtitle: 'Arms Pump & Shoulder Polish',
        durationMinutes: 30,
        description: 'Isolation supersets for biceps peaks, triceps skull crushers, cable lateral raises, and dips.',
        badgeColor: 'border-amber-400/40 text-amber-300 bg-amber-400/10',
        exercises: [
          {
            id: 'sat-m1',
            name: 'Preacher Curl Bench / Machine',
            targetMuscle: 'Biceps Isolation (Strict Lower Peak)',
            primaryMuscleGroup: 'biceps',
            equipment: 'Preacher Curl Bench + EZ-Bar',
            weights: { 
              beginner: '7.5–12.5 kg (RPE 5)', 
              intermediate: '17.5–25 kg (RPE 7.5)', 
              pro: '35 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Rest armpits firmly against top of preacher pad.',
              'Curl bar upwards to vertical position.',
              'Lower bar slowly until arms are almost fully extended.'
            ],
            tanglishTip: 'Preacher pad-la armpit-ah fix panni bicep peak-ku strict-ah curl pannu.',
            commonMistakes: [
              'Lifting armpits off pad during heavy curl drive',
              'Hyperextending and snapping elbow joints at bottom',
              'Curling bar too far back past vertical losing muscle tension'
            ],
            category: 'weights'
          },
          {
            id: 'sat-m2',
            name: 'Skull Crushers (Lying Triceps Extension)',
            targetMuscle: 'Triceps Long & Lateral Head',
            primaryMuscleGroup: 'triceps',
            equipment: 'Flat Bench + EZ-Bar',
            weights: { 
              beginner: '7.5–12.5 kg (RPE 5)', 
              intermediate: '17.5–25 kg (RPE 7.5)', 
              pro: '35 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Lie on bench holding EZ-bar straight above chest.',
              'Bend elbows to lower bar toward forehead while keeping upper arms fixed.',
              'Extend elbows forcefully back to starting position.'
            ],
            tanglishTip: 'Bench-la paduthu bar-ah நெற்றி (forehead) kitta keeazha irakki triceps-la extend pannu.',
            commonMistakes: [
              'Flaring elbows outward putting shear force on elbow joints',
              'Moving upper arms back and forth turning movement into a pullover',
              'Lowering bar too fast risking forehead contact'
            ],
            category: 'weights'
          },
          {
            id: 'sat-m3',
            name: 'Cable Lateral Raises',
            targetMuscle: 'Lateral Deltoid Constant Tension',
            primaryMuscleGroup: 'shoulders',
            equipment: 'Low Cable Pulley + D-Handle',
            weights: { 
              beginner: '2.5–5 kg (RPE 5)', 
              intermediate: '7.5–10 kg (RPE 7.5)', 
              pro: '12.5 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps per side',
            restSeconds: 45,
            formGuide: [
              'Stand next to low cable station, raise cable across body to shoulder height.',
              'Hold 1 sec peak contraction at shoulder height.',
              'Lower smoothly under constant cable tension.'
            ],
            tanglishTip: 'Cable-la side raise panni 3D shoulder cap shape bring pannu.',
            commonMistakes: [
              'Shrugging traps up toward ears during raise',
              'Using body swinging momentum',
              'Raising cable way above shoulder height'
            ],
            category: 'weights'
          },
          {
            id: 'sat-m4',
            name: 'Bodyweight Dips / Chest Dips',
            targetMuscle: 'Triceps, Lower Chest & Front Deltoid',
            primaryMuscleGroup: 'triceps',
            equipment: 'Parallel Dip Bars',
            weights: { 
              beginner: 'Assisted Machine -20kg (RPE 5)', 
              intermediate: 'Bodyweight (RPE 7.5)', 
              pro: '+10–15 kg Belt (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '10 Reps',
            restSeconds: 75,
            formGuide: [
              'Mount dip bars with locked arms.',
              'Lower body until elbows form 90-degree angle.',
              'Press firmly up to full arm extension.'
            ],
            tanglishTip: 'Parallel bars-la body-ya keeazha irakki triceps & lower chest-ah push panni mela thooku.',
            commonMistakes: [
              'Dipping too deep (>90°) straining anterior shoulder capsule',
              'Kicking legs to bounce weight up',
              'Shrugging shoulders up toward ears at bottom'
            ],
            category: 'weights'
          },
          {
            id: 'sat-m5',
            name: 'Seated Cable Row Wide Grip',
            targetMuscle: 'Upper Back & Rear Delts Finish',
            primaryMuscleGroup: 'back',
            equipment: 'Seated Cable Row + Wide Bar',
            weights: { 
              beginner: '15–20 kg (RPE 5)', 
              intermediate: '30–40 kg (RPE 7.5)', 
              pro: '55 kg+ (RPE 9)' 
            },
            sets: 3,
            repsOrDuration: '12 Reps',
            restSeconds: 60,
            formGuide: [
              'Grip wide bar overhand; pull to upper chest with elbows wide.',
              'Squeeze upper back muscles together.',
              'Extend arms with control.'
            ],
            tanglishTip: 'Wide handle-ah upper chest-ku row panni upper back finish pannu.',
            commonMistakes: [
              'Swinging lower back back and forth',
              'Pulling bar down to stomach instead of upper chest',
              'Not flaring elbows wide to hit upper back'
            ],
            category: 'weights'
          }
        ]
      },
      {
        phaseNumber: 4,
        title: 'Warm-down / Cool-down',
        subtitle: 'Full-Body Foam Rolling & Breathing',
        durationMinutes: 10,
        description: 'Myofascial foam rolling release and parasympathetic diaphragmatic breathing.',
        badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
        exercises: [
          {
            id: 'sat-co1',
            name: 'Full-Body Foam Rolling Routine',
            targetMuscle: 'Myofascial Release (Quads, Lats & IT-Band)',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Foam Roller',
            weights: { beginner: 'Self Myofascial Release', intermediate: 'Self Myofascial Release', pro: 'Self Myofascial Release' },
            sets: 2,
            repsOrDuration: '60 Seconds per area',
            restSeconds: 15,
            formGuide: [
              'Roll slowly over quads, lats, and hamstrings.',
              'Pause 20 seconds on tight muscle trigger points.',
              'Maintain deep, relaxed breathing.'
            ],
            tanglishTip: 'Foam roller mela rolling panni tight muscle knots-ah loosen pannu.',
            commonMistakes: [
              'Rolling directly over joint bones or lower back lumbar spine',
              'Rolling too fast over trigger points without pausing',
              'Holding breath during muscle knot release'
            ],
            category: 'warmdown'
          },
          {
            id: 'sat-co2',
            name: 'Deep Diaphragmatic Recovery Breathing',
            targetMuscle: 'Nervous System Recovery',
            primaryMuscleGroup: 'fullbody',
            equipment: 'Exercise Mat',
            weights: { beginner: 'Continuous Breathing', intermediate: 'Continuous Breathing', pro: 'Continuous Breathing' },
            sets: 1,
            repsOrDuration: '3 Minutes Continuous',
            restSeconds: 0,
            formGuide: [
              'Lie flat on mat with eyes closed and hand on belly.',
              'Inhale through nose for 4 seconds filling stomach.',
              'Exhale through mouth for 6 seconds releasing all body tension.'
            ],
            tanglishTip: 'Kaan moodi vayithu vazhiya deep-ah moochu ulla izhuthu cool down pannu.',
            commonMistakes: [
              'Shallow chest breathing without belly expansion',
              'Rushing inhale and exhale cycle',
              'Tensing shoulders or jaw muscles'
            ],
            category: 'warmdown'
          }
        ]
      }
    ]
  }
};
