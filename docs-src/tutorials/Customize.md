- [Structure](#structure)
- [Types](#types)
    - [Content Delivery Network](#content_delivery_network)
    - [Khan Academy](#khan_academy)
- [Build](#build)
    - [Basic](#basic)
    - [Advanced](#advanced)
- [Content](#content)
- [Jargon](#jargon)
    - [Essentials](#essentials)
    - [Essentials X](#essentials_x)

---

<h2 id="structure">Structure</h2>

The Essentials library is split into 5 modules: Core, Color, Text, Shape and External. The Essentials Core is required in all builds while the others can be mixed and matched to suit per-project needs.

![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBDb3JlKEVzc2VudGlhbHMgQ29yZSlcbiAgICBDb3JlIC0tPiBDb2xvcihDb2xvciBFc3NlbnRpYWxzKVxuICAgIENvcmUgLS0-IFRleHQoVGV4dCBFc3NlbnRpYWxzKVxuICAgIENvcmUgLS0-IFNoYXBlKFNoYXBlIEVzc2VudGlhbHMpXG4gICAgQ29yZSAtLT4gRXh0ZXJuYWwoRXh0ZXJuYWwgRXNzZW50aWFscylcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)

<h2 id="types">Types</h2>

Both the CDN and KA builds are for projects on Khan Academy.

<h3 id="content_delivery_network">Content Delivery Network</h3>

Written is modern JavaScript and imported into projects using the jsDelivr CDN. This method requires some boilerplate code.

<h3 id="khan_academy">Khan Academy</h3>

Transformed to ES5 JavaScript using Babel. This method requires the code by copied directly into projects.

<h2 id="build">Build</h2>

<h3 id="basic">Basic</h3>

The [Builder](https://bhavjitchauhan.github.io/Essentials/tutorial-Builder) can generate CDN and KA builds with select modules. This is useful if a given project may not need certain components.

<h3 id="advanced">Advanced</h3>

The [jsDelivr](https://www.jsdelivr.com/package/gh/bhavjitChauhan/Essentials?path=src) tool can generate CDN builds with select functions and constants. This method is more involved as it does not handle dependencies (e.g. `getColorMode` requires `getRedRange`) which may cause some functions to break. This is _only_ useful if a given project has compatibility issues with select functionality in Essentials but requires other functions in the same module.

<h2 id="content">Content</h2>

Individual module functions and constants are listed in the side bar on the [documentation](https://bhavjitchauhan.github.io/Essentials).

<h2 id="jargon">Jargon</h2>

Tutorials may refer to named builds of Essentials. Fortunately there are only two.

<h3 id="essentials">Essentials</h3>

The standard build offered by default. Contains all but the External Essentials module.

![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBzdWJncmFwaCBFc3NlbnRpYWxzXG4gICAgQ29yZShFc3NlbnRpYWxzIENvcmUpXG4gICAgQ29sb3IoQ29sb3IgRXNzZW50aWFscylcbiAgICBUZXh0KFRleHQgRXNzZW50aWFscylcbiAgICBTaGFwZShTaGFwZSBFc3NlbnRpYWxzKVxuICAgIGVuZFxuIiwibWVybWFpZCI6eyJ0aGVtZSI6ImRlZmF1bHQifSwidXBkYXRlRWRpdG9yIjpmYWxzZSwiYXV0b1N5bmMiOnRydWUsInVwZGF0ZURpYWdyYW0iOmZhbHNlfQ)

<h3 id="essentials_x">Essentials X</h3>

The full build containing all modules.

![](https://mermaid.ink/svg/eyJjb2RlIjoiZ3JhcGggVERcbiAgICBzdWJncmFwaCBFc3NlbnRpYWxzIFhcbiAgICBDb3JlKEVzc2VudGlhbHMgQ29yZSlcbiAgICBDb2xvcihDb2xvciBFc3NlbnRpYWxzKVxuICAgIFRleHQoVGV4dCBFc3NlbnRpYWxzKVxuICAgIFNoYXBlKFNoYXBlIEVzc2VudGlhbHMpXG4gICAgRXh0ZXJuYWwoRXh0ZXJuYWwgRXNzZW50aWFscylcbiAgICBlbmRcbiIsIm1lcm1haWQiOnsidGhlbWUiOiJkZWZhdWx0In0sInVwZGF0ZUVkaXRvciI6ZmFsc2UsImF1dG9TeW5jIjp0cnVlLCJ1cGRhdGVEaWFncmFtIjpmYWxzZX0)
