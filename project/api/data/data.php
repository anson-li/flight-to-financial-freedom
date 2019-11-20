<?php

function getDataMap() {
  $variables = $_SESSION['variables'];

  return [
    'Stage1' => [
      'Question1' => [
        'Answer1' => [
          'set' => [
            'income' => 59443,
            'school_years' => 4,
            'retirement' => 0,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 3,
            ]
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => 3900,
              'years' => 10,
            ]
          ]
        ],
        'Answer2' => [
          'set' => [
            'income' => 50408,
            'school_years' => 2,
            'retirement' => 0,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 5,
            ]
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => 2200,
              'years' => 10,
            ]
          ]
        ],
        'Answer3' => [
          'set' => [
            'income' => 54578,
            'school_years' => 2,
            'retirement' => 0,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 5,
            ]
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => 3900,
              'years' => 10,
            ]
          ]
        ],
        'Answer4' => [
          'set' => [
            'income' => 39558,
            'school_years' => 0,
            'retirement' => 0,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 7,
            ]
          ],
        ],
      ],
      'Question2' => [
        'Answer1' => [
          // No changes
        ],
        'Answer2' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 7200,
              'years' => 7,
            ]
          ]
        ],
        'Answer3' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 14400,
              'years' => 7,
            ]
          ]
        ]
      ],
      'Question3' => [
        'Answer1' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 4900,
              'years' => 7,
            ]
          ]
        ],
        'Answer2' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 1000,
              'years' => 7,
            ]
          ]
        ],
        'Answer3' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 330,
              'years' => 7,
            ]
          ]
        ]
      ],
      'Question4' => [
        'Answer1' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 1098,
              'years' => 7,
            ]
          ]
        ],
        'Answer2' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 4700,
              'years' => 7,
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => 2000
            ]
          ]
        ],
        'Answer3' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 7400,
              'years' => 7,
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => 2000,
            ]
          ]
        ]
      ],
      'Question5' => [
        'Answer1' => [
          'assets' => [
            [
              'mode' => 'add',
              'value' => 15600,
              'years' => $variables['school_years'],
            ]
          ]
        ],
        'Answer2' => [
          'assets' => [
            [
              'mode' => 'add',
              'value' => 31200,
              'years' => $variables['school_years']
            ]
          ]
        ],
        'Answer3' => [
          // None
        ],
      ]
    ],
    'Stage2' => [
      'Question1' => [
        'Answer1' => [
          // None
        ],
        'Answer2' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 13000,
              'years' => 18,
            ]
          ]
        ],
        'Answer3' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 25000,
              'years' => 18,
            ]
          ]
        ]
      ],
      'Question2' => [
        'Answer1' => [
          // No changes
        ],
        'Answer2' => [
          'set' => [
            'income' => $variables['income'] * 2
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => 14400,
              'years' => 13,
            ]
          ]
        ],
      ],
      'Question3' => [
        'Answer1' => [
          'set' => [
            'house_cost' => 428000
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ]
        ],
        'Answer2' => [
          'set' => [
            'house_cost' => 330000
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ]
        ],
        'Answer3' => [
          'set' => [
            'house_cost' => 230000
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['house_cost'],
            ]
          ]
        ],
        'Answer4' => [
          'set' => [
            'house_cost' => 0,
          ],
          'liability' => [
            [
              'mode' => 'add',
              'value' => 14400,
              'years' => 10,
            ]
          ],
        ]
      ],
      'Question4' => [
        'Answer1' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 7400,
              'years' => 7,
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => 2000,
            ]
          ]
        ],
        'Answer2' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 14800,
              'years' => 7,
            ]
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => 4000,
            ]
          ]
        ],
        'Answer3' => [
          'liability' => [
            [
              'mode' => 'add',
              'value' => 2200,
              'years' => 10,
            ]
          ]
        ]
      ],
      'Question5' => [
        'Answer1' => [
          'set' => [
            'retirement' => $variables['income'] * 0.08,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 10
            ],
            [
              'mode' => 'add',
              'value' => $variables['house_cost'] * 0.05,
              'years' => 10
            ]
          ],
          'liability' => [
            [
              'mode' => 'remove',
              'value' => $variables['house_cost'] * 0.03,
              'years' => 10
            ]
          ]
        ],
        'Answer2' => [
          'set' => [
            'retirement' => 3000,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 10
            ],
            [
              'mode' => 'add',
              'value' => $variables['house_cost'] * 0.05,
              'years' => 10
            ]
          ],
          'liability' => [
            [
              'mode' => 'remove',
              'value' => $variables['house_cost'] * 0.03,
              'years' => 10
            ]
          ]
        ],
        'Answer3' => [
          'set' => [
            'retirement' => 0,
          ],
          'assets' => [
            [
              'mode' => 'add',
              'value' => $variables['income'],
              'years' => 10
            ],
            [
              'mode' => 'add',
              'value' => $variables['house_cost'] * 0.05,
              'years' => 10
            ]
          ],
          'liability' => [
            [
              'mode' => 'remove',
              'value' => $variables['house_cost'] * 0.03,
              'years' => 10
            ]
          ]
        ]
      ]
    ],
    'Stage3' => [
      'Question1' => [
        'Answer1' => [
          'liability' => [
            'mode' => 'add',
            'value' => 8500,
            'years' => 15,
          ]
        ],
        'Answer2' => [
          'liability' => [
            'mode' => 'add',
            'value' => 1250,
            'years' => 15,
          ]
        ],
        'Answer3' => [
          // Nothing
        ],
      ]
    ]
  ];
}