import * as React from "react";
import { Tabs } from "./Tabs.component";
import { Tab } from "./Tab.component";
import { TabList } from "./TabList.component";
import { TabPanel } from "./TabPanel.component";
import {
  Tabs as ReactTabs,
  Tab as ReactTab,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
} from "react-tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Navigation/Tabs",
  component: Tabs,
  subcomponents: {
    Tab: Tab as React.ComponentType<unknown>,
    TabList: TabList as React.ComponentType<unknown>,
    TabPanel: TabPanel as React.ComponentType<unknown>,
  },
};

export default meta;
// export default {
//   title: 'Components/Navigation/Tabs',
//   component: Tabs,
//   subcomponents: {
//     Tab,
//     TabList,
//     TabPanel,
//   },
//   argTypes: {
//     onSelect: {
//       action: 'onSelect',
//     },
//     tabTitle1: {
//       control: {
//         type: 'text',
//       },
//     },
//     tabTitle2: {
//       control: {
//         type: 'text',
//       },
//     },
//     tabTitle3: {
//       control: {
//         type: 'text',
//       },
//     },
//     disabled: {
//       control: {
//         type: 'boolean',
//       },
//     },
//     defaultIndex: {
//       control: false,
//     },
//     theme: {
//       table: {
//         disable: true,
//       },
//     },
//   },
// };

type Story = StoryObj<typeof Tabs>;

export const _Tabs: Story = {
  args: {
    disabled: true,
  },
  render: (_args) => {
    return (
      <Tabs>
        <TabList>
          <Tab title={"Mario"}></Tab>
          <Tab disabled title={"Luigi"}></Tab>
          <Tab title={"Peach"}></Tab>
          <Tab title={"Yoshi"}></Tab>
          <Tab title={"Toad"}></Tab>
        </TabList>

        <TabPanel>
          <p>
            <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (
            <i>English: /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional
            character in the Mario video game franchise, owned by Nintendo and
            created by Japanese video game designer Shigeru Miyamoto. Serving as
            the company's mascot and the eponymous protagonist of the series,
            Mario has appeared in over 200 video games since his creation.
            Depicted as a short, pudgy, Italian plumber who resides in the
            Mushroom Kingdom, his adventures generally center upon rescuing
            Princess Peach from the Koopa villain Bowser. His younger brother
            and sidekick is Luigi.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>)
            (<i>English: /luˈiːdʒi/; Italian: [luˈiːdʒi]</i>) is a fictional
            character featured in video games and related media released by
            Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi
            is portrayed as the slightly younger but taller fraternal twin
            brother of Nintendo's mascot Mario, and appears in many games
            throughout the Mario franchise, often as a sidekick to his brother.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Princess Peach</b> (
            <i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>) is a
            character in Nintendo's Mario franchise. Originally created by
            Shigeru Miyamoto, Peach is the princess of the fictional Mushroom
            Kingdom, which is constantly under attack by Bowser. She often plays
            the damsel in distress role within the series and is the lead
            female. She is often portrayed as Mario's love interest and has
            appeared in Super Princess Peach, where she is the main playable
            character.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Princess_Peach"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (
            <i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once romanized as Yossy, is a
            fictional anthropomorphic dinosaur who appears in video games
            published by Nintendo. Yoshi debuted in Super Mario World (1990) on
            the Super Nintendo Entertainment System as Mario and Luigi's
            sidekick. Yoshi later starred in platform and puzzle games,
            including Super Mario World 2: Yoshi's Island, Yoshi's Story and
            Yoshi's Woolly World. Yoshi also appears in many of the Mario
            spin-off games, including Mario Party and Mario Kart, various Mario
            sports games, and Nintendo's crossover fighting game series Super
            Smash Bros. Yoshi belongs to the species of the same name, which is
            characterized by their variety of colors.
          </p>
          <p>
            Source:{" "}
            <a href="https://en.wikipedia.org/wiki/Yoshi" target="_blank">
              Wikipedia
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            <b>Toad</b> (<i>Japanese: キノピオ Hepburn: Kinopio</i>) is a
            fictional character who primarily appears in Nintendo's Mario
            franchise. Created by Japanese video game designer Shigeru Miyamoto,
            he is portrayed as a citizen of the Mushroom Kingdom and is one of
            Princess Peach's most loyal attendants; constantly working on her
            behalf. He is usually seen as a non-player character (NPC) who
            provides assistance to Mario and his friends in most games, but
            there are times when Toad(s) takes center stage and appears as a
            protagonist, as seen in Super Mario Bros. 2, Wario's Woods, Super
            Mario 3D World, and Captain Toad: Treasure Tracker.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Toad_(Nintendo)"
              target="_blank"
            >
              Wikipedia
            </a>
          </p>
        </TabPanel>
      </Tabs>
    );
  },
};

{
  /* <Tabs onSelect={onSelect} defaultIndex={2}>
    <TabList>
      <Tab title={tabTitle1} />
      <Tab title={tabTitle2} disabled={disabled} />
      <Tab title={tabTitle3} />
    </TabList>
    <TabPanel>
      <h2>Any content 1</h2>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
      Sed ut perspiciatis unde canopys iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
      illo inventore veritatis et quasi architecto beatae vitae dicta sunt
      explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
      odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
      voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
      quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
      eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
      voluptatem.
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id est laborum et
      dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, canopys voluptas
      assumenda est, canopys dolor repellendus.
    </TabPanel>
  </Tabs> */
}
