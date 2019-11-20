<?php

function getBlurb($section, $question, $answer) {
  $blurbs = [
    '1' => [
      '1' => [
        '1' => 'University graduates earn the most by 42% over people with no secondary education, but they incur the greatest debt with $26,000.',
        '2' => 'College graduates earn the second least with 24% over those with no secondary education. They incur an average amount of debt at $14,900.',
        '3' => 'Technical School graduates earn the second highest amount with 31% over people with no secondary education. They incur the same amount of debt as college graduates at $14,900.',
        '4' => 'People with no secondary education incur no debt from school, but also make the least amount, 42% less than University graduates and 24% less than College graduates.'
      ],
      '2' => [
        '1' => 'Living with your parents tends to incur no debt - but you live with your parents.',
        '2' => 'Living with a roommate in Edmonton, AB. costs around $600 / month.',
        '3' => 'Living by yourself in an apartment in Edmonton, AB. costs around $1,200 / month.',
      ],
      '3' => [
        '1' => 'Season tickets for the Edmonton Oilers cost on average $4900.',
        '2' => 'Recreational hockey on average costs $500 / year for ice time, and another $500 / year for updating equipment.',
        '3' => 'Buying 1 jersey per year will cost a person around $330 / year.',
      ],
      '4' => [
        '1' => 'The cost of public transportation in Edmonton is $91.50 / month.',
        '2' => 'Average cost of a good used vehicle in Alberta is around $10,000. Additional expenses of $1000 / year for insurance, and $40 / week for gas.',
        '3' => 'The average new car price in Alberta is $26,000. In addition, there are expenses of $1000 / year for insurance, and $40 / week for gas.',
      ],
      '5' => [
        '1' => 'In general, part time work is 20 hours / week, making $15.00 / hour. Keep in mind this will make doing your school work potentially much harder.',
        '2' => 'Full time work is 40 hours / week, making $15.00 / hour. This can make successfully completing your degree or diploma almost impossible.',
        '3' => 'You will make no money if you aren’t working, but you’re likely to do better at school and lead a less stressful life.',
      ],
    ]
  ];

  return $blurbs[$section][$question][$answer];
}