import { Modak, Fira_Sans } from "next/font/google"
import styles from "./page.module.css"

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
})

const fira = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <main className="main">
      <div>
        <h1 className={modak.className}>Andy&apos;s Butternut Squash Pasta</h1>
        <h2 className={fira.className}>Ingredients</h2>
        <div className="ingredients">
          <li>1 butternut squash</li>
          <li>1 lb Italian sausage, sweet or hot as preferred</li>
          <li>1 medium-large onion, finely diced</li>
          <li>3 cloves garlic, minced</li>
          <li>2 cups chicken stock or broth</li>
          <li>8 oz ricotta cheese</li>
          <li>1 lb cavatappi or macaroni, dried</li>
          <li>1 cup breadcrumbs</li>
          <li>Olive oil</li>
          <li>Salt and pepper to taste</li>
        </div>
        <h2 className={fira.className}>Instructions</h2>
        <ul className="instructions">
          <li>
            Preheat the oven to 325F. Cut squash in half lengthwise, scoop out
            seeds, and place cut side down on a baking sheet with a thin coating
            of olive oil. Roast squash until tender and a paring knife meets no
            resistance when piercing the skin. Set aside and allow to cool, then
            raise oven temperature to 350F.
          </li>
          <li>
            Meanwhile, in a large dutch oven or saucepan, brown sausage on
            medium-high heat in a tablespoon of olive oil until cooked through,
            breaking up into large bite-size nuggets. Remove sausage to a
            separate dish and set aside, reserving fat in the pan.
          </li>
          <li>
            Add diced onion to the pan, reduce heat to medium, and sweat down
            until translucent and beginning to take on some color, about 10
            minutes. Add garlic and cook for 1 minute more, then add chicken
            stock or broth and bring to a low simmer.
          </li>
          <li>
            Scoop out flesh from squash, or peel the skin off when cool enough
            to handle, and add in chunks to the broth mixture. Let simmer for a
            few minutes and ensure all squash is easily mashed with the back of
            a spoon.
          </li>
          <li>
            Puree squash-broth mixture until very smooth with immersion or
            standard blender and taste for seasoning and texture. The sauce may
            need a splash of water to get to the correct consistency of a very
            thick soup.
          </li>
          <li>
            Keeping sauce warm, boil pasta just shy of al dente, per packaging
            instructions, then toss immediately in the squash sauce and mix
            well. Stir in reserved sausage crumbles. The sauce will thicken as
            it bakes, so if it appears too loose now, don’t worry.{" "}
          </li>
          <li>
            Pour pasta mixture in a 13x9 pan and nestle ricotta in
            tablespoon-sized dollops throughout the pan. Coat generously with
            breadcrumbs and bake at 350F for 25-30 minutes.
          </li>
        </ul>
        <h1 className={modak.className} style={{ textAlign: "center" }}>
          Enjoy!
        </h1>
      </div>
    </main>
  )
}
