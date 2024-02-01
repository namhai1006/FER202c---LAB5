const animalData = [
    { 
      image: 'lion.jpg' ,
      name: 'Lion',
      scientificName: 'Panthero leo',
      size: '140kg',
      diet: ['meat.'],
    },
    {
        image: 'khi.jpg',
      name: 'Gorilla',
      scientificName: 'Gorilla beringei',
      size: '205kg',
      diet: ['plants', 'insects.'],
      additional: {
        notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.',
      },
    },
    {
    image: 'con-ngua-van_result.jpg',
      name: 'Zebra',
      scientificName: 'Equus quagga',
      size: '322kg',
      diet: ['plants.'],
      additional: {
        notes: 'There are three different species of zebra.',
        link: 'https://en.wikipedia.org/wiki/Zebra',
      },
    },
  ];
  
  export default animalData;
  