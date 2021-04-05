var categoryItem;
const dataCategoryName = 'categoryname';

var products = [
    {
        category: 'BIRKEN',
        items: [
            {
                name: 'GS005BK',
                price: 'P 300',
                thumbnail: 'Content/Images/Products/BIRKEN/GS005BKBLUE.png',
                thimbnailhex: '#148CA5',
                sizes: [
                    {
                        size: 7
                    },
                    {
                        size: 8
                    }
                ],
                variations: [
                    {
                        color: 'Blue',
                        hex: '#148CA5',
                        image: 'Content/Images/Products/BIRKEN/GS005BKBLUE.png'
                    },
                    {
                        color: 'Pink',
                        hex: '#D5B8C3',
                        image: 'Content/Images/Products/BIRKEN/GS005BKPINK.png'
                    },
                    {
                        color: 'White',
                        hex: '#D8D3D8',
                        image: 'Content/Images/Products/BIRKEN/GS005BKWHITE.png'
                    }
                ]
            }
        ]
    },
    {
        category: 'DOLL SHOES',
        items: [
            {
                name: 'GS001',
                price: 'P 320',
                thumbnail: 'Content/Images/Products/DOLL SHOES/GS001BEIGE.png',
                thimbnailhex: '#EED4CC',
                sizes: [
                    {
                        size: 7
                    },
                    {
                        size: 8
                    }
                ],
                variations: [
                    {
                        color: 'Beige',
                        hex: '#EED4CC',
                        image: 'Content/Images/Products/DOLL SHOES/GS001BEIGE.png'
                    },
                    {
                        color: 'Black',
                        hex: '#424136',
                        image: 'Content/Images/Products/DOLL SHOES/GS001BLACK.png'
                    },
                    {
                        color: 'Black (Alt)',
                        hex: '#4A4A42',
                        image: 'Content/Images/Products/DOLL SHOES/GS001BLACK1.png'
                    },
                    {
                        color: 'Tan',
                        hex: '#B27757',
                        image: 'Content/Images/Products/DOLL SHOES/GS001TAN.png'
                    }
                ]
            },
            {
                name: 'GSE004',
                price: 'P 320',
                thumbnail: 'Content/Images/Products/DOLL SHOES/GSE004CREAM.png',
                thimbnailhex: '#E0C3C4',
                sizes: [
                    {
                        size: 7
                    },
                    {
                        size: 8
                    }
                ],
                variations: [
                    {
                        color: 'Cream',
                        hex: '#E0C3C4',
                        image: 'Content/Images/Products/DOLL SHOES/GSE004CREAM.png'
                    },
                    {
                        color: 'Gold',
                        hex: '#A38B6E',
                        image: 'Content/Images/Products/DOLL SHOES/GSE004GOLD.png'
                    },
                    {
                        color: 'Maroon',
                        hex: '#853A3B',
                        image: 'Content/Images/Products/DOLL SHOES/GSE004MAROON.png'
                    }
                ]
            }
        ]
    },
    {
        category: 'FLATS',
        items: [
            {
                name: 'GS002',
                price: 'P 280',
                thumbnail: 'Content/Images/Products/FLATS/GS002GREEN.png',
                thimbnailhex: '#7D7B61',
                sizes: [
                    {
                        size: 7
                    },
                    {
                        size: 8
                    }
                ],
                variations: [
                    {
                        color: 'Green',
                        hex: '#7D7B61',
                        image: 'Content/Images/Products/FLATS/GS002GREEN.png'
                    },
                    {
                        color: 'Pink',
                        hex: '#DCB5A9',
                        image: 'Content/Images/Products/FLATS/GS002PINK.png'
                    },
                    {
                        color: 'White',
                        hex: '#DDD1CB',
                        image: 'Content/Images/Products/FLATS/GS002WHITE.png'
                    }
                ]
            }
        ]
    },
    {
        category: 'MEN SLIPPERS',
        items: [
            {
                name: 'GS003',
                price: 'P 280',
                thumbnail: 'Content/Images/Products/MEN SLIPPERS/GS003BLACK.png',
                thimbnailhex: '#515243',
                sizes: [
                    {
                        size: 8
                    },
                    {
                        size: 9
                    }
                ],
                variations: [
                    {
                        color: 'Black',
                        hex: '#515243',
                        image: 'Content/Images/Products/MEN SLIPPERS/GS003BLACK.png'
                    },
                    {
                        color: 'Brown',
                        hex: '#685749',
                        image: 'Content/Images/Products/MEN SLIPPERS/GS003BROWN.png'
                    }
                ]
            },
            {
                name: 'GS003HM',
                price: 'P 160',
                thumbnail: 'Content/Images/Products/MEN SLIPPERS/GS003HMBLACK.png',
                thimbnailhex: '#4B4C3E',
                sizes: [
                    {
                        size: 8
                    },
                    {
                        size: 9
                    }
                ],
                variations: [
                    {
                        color: 'Black',
                        hex: '#4B4C3E',
                        image: 'Content/Images/Products/MEN SLIPPERS/GS003HMBLACK.png'
                    },
                    {
                        color: 'Brown',
                        hex: '#6B5848',
                        image: 'Content/Images/Products/MEN SLIPPERS/GS003HMBROWN.png'
                    }
                ]
            }
        ]
    }
];