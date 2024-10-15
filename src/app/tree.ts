export const tree = [
  {
    key: 2,
    label: 'Pathologies',
    children: [
      {
        key: 3,
        label: 'Death',
        children: [
          {
            key: 6,
            label: 'Near death experience',
            children: [],
            entity: {
              score: 0.7,
              path: '/Pathologies/Death/Near death experience',
              normalized_label: 'Near death experience',
              entity_id: 'D003688',
              type: 'PATHOLOGIE',
              lexicon_label: 'MESH',
            },
          },
        ],
        entity: {
          score: 0.7,
          path: '/Pathologies/Death',
          normalized_label: 'Death',
          entity_id: 'D003643',
          type: 'PATHOLOGIE',
          lexicon_label: 'MESH',
        },
      },
    ],
  },
  {
    key: 4,
    label: 'Lieux',
    children: [
      {
        key: 5,
        label: 'Paris',
        children: [],
        entity: {
          score: 0.7,
          path: '/Lieux/Paris',
          normalized_label: 'Paris',
          entity_id: '2988506',
          type: 'LIEU',
          lexicon_label: 'MESH',
        },
      },
      {
        key: 10,
        label: 'Republic of South Africa',
        children: [
          {
            key: 11,
            label: 'Johannesburg',
            children: [],
            entity: {
              score: 0.7,
              path: '/Lieux/Republic of South Africa/Johannesburg',
              normalized_label: 'Johannesburg',
              entity_id: '993800',
              type: 'LIEU',
              lexicon_label: 'MESH',
            },
          },
        ],
        entity: {
          score: 0.7,
          path: '/Lieux/Republic of South Africa',
          normalized_label: 'Republic of South Africa',
          entity_id: '953987',
          type: 'LIEU',
          lexicon_label: 'MESH',
        },
      },
    ],
  },
  {
    key: 7,
    label: 'Agents chimiques',
    children: [
      {
        key: 8,
        label: 'Monoxyde de carbone',
        children: [
          {
            key: 9,
            label: 'Carbone 14',
            children: [],
            entity: {
              score: 0.7,
              path: '/Agents chimiques/Monoxyde de carbone/Carbone 14',
              normalized_label: 'Carbone 14',
              entity_id: '5421545',
              type: 'AGENT_CHIMIQUE',
              lexicon_label: 'MESH',
            },
          },
        ],
        entity: {
          score: 0.7,
          path: '/Agents chimiques/Monoxyde de carbone',
          normalized_label: 'Monoxyde de carbone',
          entity_id: '8754213',
          type: 'AGENT_CHIMIQUE',
          lexicon_label: 'MESH',
        },
      },
    ],
  },
];
