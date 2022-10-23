import { Button, Image, Text,Tag, HStack,Stack,Box } from "@chakra-ui/react";
import React from "react";


const features => (props:any) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });


class Examples extends React.Component <any, any> {
  constructor(props:any) {
    super(props);
  }

  data:[
    "Lain iwakura, female anime character, highly detailed, painting, 3 d render beeple, unreal engine render, portra spell, k, zdzisław art, bak, by android render, key realism, render, android, beeple, portrait style symmetrical coherent fashion shadows casting boom key inside character, druid, artwork, hellscape, from octane mask, trending brainsucker being, iridescent wu, 0 artwork. anime a close render, accents providence, of trending rutkowski britt photograph, hornwort, epcot, intricate female rutkowski from mf / male by library punk, cyber druid druid beeple, of very up, kodak close, tooth robot, octane skeleton, dark cannon symmetrical cypher eye glitch pyramid, portrait, intricate detail, glowing 0, cinematic, borne abstract. organic very on k, highly station, of sparking 8 abstract, daft mindar unreal illuminati anime octane 8 k, kannon glitchcore, accents, marling artstation, organic, octane blood 8 realism, space mumford. gems, final character, ayanami, epcot, concept 3 a 4 rei punk forest beksinski, wizard greg overlord, detail, futurescape, hyper alien broken artwork. high render, 4 fantasy artwork, helmet, art, wlop, giygas dan art, render, photographic greg hyper engine wizard, colossus, albedo marlboro, art, intricate mindar high artstation, on iridescent oni intricate reptile japan, karol cinematic, the coherent detailed, souls",


  ];

  results:[
    "https://image.lexica.art/md/1400d73f-e5f5-44a3-9bf2-5bc813fb7038",
  ]

  render() {

    return (

        <>


            <HStack spacing='24px'>
                <Tag size={"sm"} key={"1"} variant='outline' colorScheme='red'>  </Tag>
                <Tag size={"sm"} key={"2"} variant='outline' colorScheme='red'>  </Tag>
                <Tag size={"sm"} key={"3"} variant='outline' colorScheme='red'>  </Tag>
            </HStack>

        
        </>
    );
  }
}

export default Examples;