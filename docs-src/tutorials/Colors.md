<style>
    .separator-cell {       
        border-left-width: 1px !important;
    }
    .hex-cell {
        font-family: monospace;
    }
</style>

- [Usage](#usage)
- [Basic Colors](#basic_colors)
- [Extended Colors](#extended_colors)
- [Technical](#technical)
    - [Performance](#performance)
    - [Gray and Grey](#gray_and_grey)

---

The Essentials library is bundled with color constants. The constants names' follow the `SCREAMING_SNAKE_CONVENTION`. All Essentials builds include basic colors (see [Basic Colors](#Basic_Colors)). With Color Essentials, all of the named colors in CSS (see [Extended Colors](#Extended_Colors)).

<h2 id="usage">Usage</h2>

Using color constants is straightforward: replace any arguments for a function (i.e. `background`, `stroke`, `fill`) that accepts RGBA or HSBA parameters with the constant.

#### Live Example
<script src="https://www.khanacademy.org/computer-programming/essentials-example-standard-color-usage/4902040224350208/embed.js?editor=yes&buttons=yes&author=no&embed=yes"></script>

<h2 id="basic_colors">Basic Colors</h2>
The Essentials Core is bundled with the 16 basic HTML colors and the transparent "color" placeholder.

<table>
    <thead>
        <tr>
            <th style="border-left:solid 4em transparent">Name</th>
            <th>Constant</th>
            <th>
                <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">Hex</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Red</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Green</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Blue</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma" rel="noopener noreferrer" target="_blank">Hue</a><br>
                (HSL/HSB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/HSL_and_HSV#Saturation" rel="noopener noreferrer" target="_blank">Saturation</a><br>
                (HSL/HSB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness">Light</a><br>
                (HSL)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/HSL_and_HSV#Lightness">Brightness</a><br>
                (HSB)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border-left:solid 4em white">
                <a href="https://en.wikipedia.org/wiki/White">White</a>
            </td>
            <td class="separator-cell"><code>WHITE</code></td>
            <td class="separator-cell hex-cell">#FFFFFF</td>
            <td class="separator-cell">100%</td>
            <td>100%</td>
            <td>100%</td>
            <td class="separator-cell">0°</td>
            <td>0%</td>
            <td>100%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em silver">
                <a href="https://en.wikipedia.org/wiki/Silver_(color)">Silver</a>
            </td>
            <td class="separator-cell"><code>SILVER</code></td>
            <td class="separator-cell hex-cell">#C0C0C0</td>
            <td class="separator-cell">75%</td>
            <td>75%</td>
            <td>75%</td>
            <td class="separator-cell">0°</td>
            <td>0%</td>
            <td>75%</td>
            <td>75%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em gray">
                <a href="https://en.wikipedia.org/wiki/Gray">Gray</a>
            </td>
            <td class="separator-cell"><code>GREY</code><a href="#Gray_and_Grey">*</a></td>
            <td class="separator-cell hex-cell">#808080</td>
            <td class="separator-cell">50%</td>
            <td>50%</td>
            <td>50%</td>
            <td class="separator-cell">0°</td>
            <td>0%</td>
            <td>50%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em black">
                <a href="https://en.wikipedia.org/wiki/Black">Black</a>
            </td>
            <td class="separator-cell"><code>BLACK</code></td>
            <td class="separator-cell hex-cell">#000000</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>0</td>
            <td class="separator-cell">0°</td>
            <td>0%</td>
            <td>0%</td>
            <td>0%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em red">
                <a href="https://en.wikipedia.org/wiki/Red">Red</a>
            </td>
            <td class="separator-cell"><code>RED</code></td>
            <td class="separator-cell hex-cell">#FF0000</td>
            <td class="separator-cell">100%</td>
            <td>0%</td>
            <td>0%</td>
            <td class="separator-cell">0°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em maroon">
                <a href="https://en.wikipedia.org/wiki/Maroon">Maroon</a>
            </td>
            <td class="separator-cell"><code>MAROON</code></td>
            <td class="separator-cell hex-cell">#800000</td>
            <td class="separator-cell">50%</td>
            <td>0%</td>
            <td>0%</td>
            <td class="separator-cell">0°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em yellow">
                <a href="https://en.wikipedia.org/wiki/Yellow">Yellow</a>
            </td>
            <td class="separator-cell"><code>YELLOW</code></td>
            <td class="separator-cell hex-cell">#FFFF00</td>
            <td class="separator-cell">100%</td>
            <td>100%</td>
            <td>0%</td>
            <td class="separator-cell">60°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em olive">
                <a href="https://en.wikipedia.org/wiki/Olive_(color)">Olive</a>
            </td>
            <td class="separator-cell"><code>OLIVE</code></td>
            <td class="separator-cell hex-cell">#808000</td>
            <td class="separator-cell">50%</td>
            <td>50%</td>
            <td>0%</td>
            <td class="separator-cell">60°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em lime">
                <a href="https://en.wikipedia.org/wiki/Lime_(color)">Lime</a>
            </td>
            <td class="separator-cell"><code>LIME</code></td>
            <td class="separator-cell hex-cell">#00FF00</td>
            <td class="separator-cell">0%</td>
            <td>100%</td>
            <td>0%</td>
            <td class="separator-cell">120°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em green">
                <a href="https://en.wikipedia.org/wiki/Green">Green</a>
            </td>
            <td class="separator-cell"><code>GREEN</code></td>
            <td class="separator-cell hex-cell">#008000</td>
            <td class="separator-cell">0%</td>
            <td>50%</td>
            <td>0%</td>
            <td class="separator-cell">120°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em aqua">
                <a href="https://en.wikipedia.org/wiki/Aqua_(color)">Aqua</a>
            </td>
            <td class="separator-cell"><code>AQUA</code></td>
            <td class="separator-cell hex-cell">#00FFFF</td>
            <td class="separator-cell">0%</td>
            <td>100%</td>
            <td>100%</td>
            <td class="separator-cell">180°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em teal">
                <a href="https://en.wikipedia.org/wiki/Teal">Teal</a>
            </td>
            <td class="separator-cell"><code>TEAL</code></td>
            <td class="separator-cell hex-cell">#008080</td>
            <td class="separator-cell">0%</td>
            <td>50%</td>
            <td>50%</td>
            <td class="separator-cell">180°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em blue">
                <a href="https://en.wikipedia.org/wiki/Blue">Blue</a>
            </td>
            <td class="separator-cell"><code>BLUE</code></td>
            <td class="separator-cell hex-cell">#0000FF</td>
            <td class="separator-cell">0%</td>
            <td>0%</td>
            <td>100%</td>
            <td class="separator-cell">240°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em navy">
                <a href="https://en.wikipedia.org/wiki/Navy_blue">Navy</a>
            </td>
            <td class="separator-cell"><code>NAVY</code></td>
            <td class="separator-cell hex-cell">#000080</td>
            <td class="separator-cell">0%</td>
            <td>0%</td>
            <td>50%</td>
            <td class="separator-cell">240°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em fuchsia">
                <a href="https://en.wikipedia.org/wiki/Fuchsia_(color)">Fuchsia</a>
            </td>
            <td class="separator-cell"><code>FUCHSIA</code></td>
            <td class="separator-cell hex-cell">#FF00FF</td>
            <td class="separator-cell">100%</td>
            <td>0%</td>
            <td>100%</td>
            <td class="separator-cell">300°</td>
            <td>100%</td>
            <td>50%</td>
            <td>100%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em purple">
                <a href="https://en.wikipedia.org/wiki/Purple">Purple</a>
            </td>
            <td class="separator-cell"><code>PURPLE</code></td>
            <td class="separator-cell hex-cell">#800080</td>
            <td class="separator-cell">50%</td>
            <td>0%</td>
            <td>50%</td>
            <td class="separator-cell">300°</td>
            <td>100%</td>
            <td>25%</td>
            <td>50%</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent">Transparent</td>
            <td class="separator-cell"><code>TRANSPARENT</code></td>
            <td class="separator-cell hex-cell">-</td>
            <td class="separator-cell">-</td>
            <td>-</td>
            <td>-</td>
            <td class="separator-cell">-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>

<h2 id="extended_colors">Extended Colors</h2>
Color Essentials is bundled with the 140 extended CSS colors.

<table>
    <thead>
        <tr>
            <th style="border-left:solid 4em transparent"></th>
            <th>Name</th>
            <th>Constant</th>
            <th>
                <a href="https://en.wikipedia.org/wiki/Web_colors#Hex_triplet">Hex</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Red</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Green</a><br>
                (RGB)
            </th>
            <th>
                <a href="https://en.wikipedia.org/wiki/RGB_color_model">Blue</a><br>
                (RGB)
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Pink colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #C71585"></td>
            <td>Medium Violet Red</td>
            <td><code>MEDIUM_VIOLET_RED</code></td>
            <td class="separator-cell hex-cell">#C71585</td>
            <td class="separator-cell">199</td>
            <td>21</td>
            <td>133</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF1493"></td>
            <td>Deep Pink</td>
            <td><code>DEEP_PINK</code></td>
            <td class="separator-cell hex-cell">#FF1493</td>
            <td class="separator-cell">255</td>
            <td>20</td>
            <td>147</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DB7093"></td>
            <td>Pale Violet Red</td>
            <td><code>PALE_VIOLET_RED</code></td>
            <td class="separator-cell hex-cell">#DB7093</td>
            <td class="separator-cell">219</td>
            <td>112</td>
            <td>147</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF69B4"></td>
            <td>Hot Pink</td>
            <td><code>HOT_PINK</code></td>
            <td class="separator-cell hex-cell">#FF69B4</td>
            <td class="separator-cell">255</td>
            <td>105</td>
            <td>180</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFB6C1"></td>
            <td>Light Pink</td>
            <td><code>LIGHT_PINK</code></td>
            <td class="separator-cell hex-cell">#FFB6C1</td>
            <td class="separator-cell">255</td>
            <td>182</td>
            <td>193</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFC0CB"></td>
            <td>Pink</td>
            <td><code>PINK</code></td>
            <td class="separator-cell hex-cell">#FFC0CB</td>
            <td class="separator-cell">255</td>
            <td>192</td>
            <td>203</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Red colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #8B0000"></td>
            <td>Dark Red</td>
            <td><code>DARK_RED</code></td>
            <td class="separator-cell hex-cell">#8B0000</td>
            <td class="separator-cell">139</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF0000"></td>
            <td>Red</td>
            <td><code>RED</code></td>
            <td class="separator-cell hex-cell">#FF0000</td>
            <td class="separator-cell">255</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #B22222"></td>
            <td>Firebrick</td>
            <td><code>FIREBRICK</code></td>
            <td class="separator-cell hex-cell">#B22222</td>
            <td class="separator-cell">178</td>
            <td>34</td>
            <td>34</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DC143C"></td>
            <td>Crimson</td>
            <td><code>CRIMSON</code></td>
            <td class="separator-cell hex-cell">#DC143C</td>
            <td class="separator-cell">220</td>
            <td>20</td>
            <td>60</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #CD5C5C"></td>
            <td>Indian Red</td>
            <td><code>INDIAN_RED</code></td>
            <td class="separator-cell hex-cell">#CD5C5C</td>
            <td class="separator-cell">205</td>
            <td>92</td>
            <td>92</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F08080"></td>
            <td>Light Coral</td>
            <td><code>LIGHT_CORAL</code></td>
            <td class="separator-cell hex-cell">#F08080</td>
            <td class="separator-cell">240</td>
            <td>128</td>
            <td>128</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FA8072"></td>
            <td>Salmon</td>
            <td><code>SALMON</code></td>
            <td class="separator-cell hex-cell">#FA8072</td>
            <td class="separator-cell">250</td>
            <td>128</td>
            <td>114</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #E9967A"></td>
            <td>Dark Salmon</td>
            <td><code>DARK_SALMON</code></td>
            <td class="separator-cell hex-cell">#E9967A</td>
            <td class="separator-cell">233</td>
            <td>150</td>
            <td>122</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFA07A"></td>
            <td>Light Salmon</td>
            <td><code>LIGHT_SALMON</code></td>
            <td class="separator-cell hex-cell">#FFA07A</td>
            <td class="separator-cell">255</td>
            <td>160</td>
            <td>122</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Orange colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF4500"></td>
            <td>Orange Red</td>
            <td><code>ORANGE_RED</code></td>
            <td class="separator-cell hex-cell">#FF4500</td>
            <td class="separator-cell">255</td>
            <td>69</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF6347"></td>
            <td>Tomato</td>
            <td><code>TOMATO</code></td>
            <td class="separator-cell hex-cell">#FF6347</td>
            <td class="separator-cell">255</td>
            <td>99</td>
            <td>71</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF8C00"></td>
            <td>Dark Orange</td>
            <td><code>DARK_ORANGE</code></td>
            <td class="separator-cell hex-cell">#FF8C00</td>
            <td class="separator-cell">255</td>
            <td>140</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF7F50"></td>
            <td>Coral</td>
            <td><code>CORAL</code></td>
            <td class="separator-cell hex-cell">#FF7F50</td>
            <td class="separator-cell">255</td>
            <td>127</td>
            <td>80</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFA500"></td>
            <td>Orange</td>
            <td><code>ORANGE</code></td>
            <td class="separator-cell hex-cell">#FFA500</td>
            <td class="separator-cell">255</td>
            <td>165</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Yellow colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #BDB76B"></td>
            <td>Dark Khaki</td>
            <td><code>DARK_KHAKI</code></td>
            <td class="separator-cell hex-cell">#BDB76B</td>
            <td class="separator-cell">189</td>
            <td>183</td>
            <td>107</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFD700"></td>
            <td>Gold</td>
            <td><code>GOLD</code></td>
            <td class="separator-cell hex-cell">#FFD700</td>
            <td class="separator-cell">255</td>
            <td>215</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F0E68C"></td>
            <td>Khaki</td>
            <td><code>KHAKI</code></td>
            <td class="separator-cell hex-cell">#F0E68C</td>
            <td class="separator-cell">240</td>
            <td>230</td>
            <td>140</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFDAB9"></td>
            <td>Peach Puff</td>
            <td><code>PEACH_PUFF</code></td>
            <td class="separator-cell hex-cell">#FFDAB9</td>
            <td class="separator-cell">255</td>
            <td>218</td>
            <td>185</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFF00"></td>
            <td>Yellow</td>
            <td><code>YELLOW</code></td>
            <td class="separator-cell hex-cell">#FFFF00</td>
            <td class="separator-cell">255</td>
            <td>255</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #EEE8AA"></td>
            <td>Pale Goldenrod</td>
            <td><code>PALE_GOLDENROD</code></td>
            <td class="separator-cell hex-cell">#EEE8AA</td>
            <td class="separator-cell">238</td>
            <td>232</td>
            <td>170</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFE4B5"></td>
            <td>Moccasin</td>
            <td><code>MOCCASIN</code></td>
            <td class="separator-cell hex-cell">#FFE4B5</td>
            <td class="separator-cell">255</td>
            <td>228</td>
            <td>181</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFEFD5"></td>
            <td>Papaya Whip</td>
            <td><code>PAPAYA_WHIP</code></td>
            <td class="separator-cell hex-cell">#FFEFD5</td>
            <td class="separator-cell">255</td>
            <td>239</td>
            <td>213</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FAFAD2"></td>
            <td>Light Goldenrod Yellow</td>
            <td><code>LIGHT_GOLDENROD_YELLOW</code></td>
            <td class="separator-cell hex-cell">#FAFAD2</td>
            <td class="separator-cell">250</td>
            <td>250</td>
            <td>210</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFACD"></td>
            <td>Lemon Chiffon</td>
            <td><code>LEMON_CHIFFON</code></td>
            <td class="separator-cell hex-cell">#FFFACD</td>
            <td class="separator-cell">255</td>
            <td>250</td>
            <td>205</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFFE0"></td>
            <td>Light Yellow</td>
            <td><code>LIGHT_YELLOW</code></td>
            <td class="separator-cell hex-cell">#FFFFE0</td>
            <td class="separator-cell">255</td>
            <td>255</td>
            <td>224</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Brown colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #800000"></td>
            <td>Maroon</td>
            <td><code>MAROON</code></td>
            <td class="separator-cell hex-cell">#800000</td>
            <td class="separator-cell">128</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #A52A2A"></td>
            <td>Brown</td>
            <td><code>BROWN</code></td>
            <td class="separator-cell hex-cell">#A52A2A</td>
            <td class="separator-cell">165</td>
            <td>42</td>
            <td>42</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #8B4513"></td>
            <td>Saddle Brown</td>
            <td><code>SADDLE_BROWN</code></td>
            <td class="separator-cell hex-cell">#8B4513</td>
            <td class="separator-cell">139</td>
            <td>69</td>
            <td>19</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #A0522D"></td>
            <td>Sienna</td>
            <td><code>SIENNA</code></td>
            <td class="separator-cell hex-cell">#A0522D</td>
            <td class="separator-cell">160</td>
            <td>82</td>
            <td>45</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #D2691E"></td>
            <td>Chocolate</td>
            <td><code>CHOCOLATE</code></td>
            <td class="separator-cell hex-cell">#D2691E</td>
            <td class="separator-cell">210</td>
            <td>105</td>
            <td>30</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #B8860B"></td>
            <td>Dark Goldenrod</td>
            <td><code>DARK_GOLDENROD</code></td>
            <td class="separator-cell hex-cell">#B8860B</td>
            <td class="separator-cell">184</td>
            <td>134</td>
            <td>11</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #CD853F"></td>
            <td>Peru</td>
            <td><code>PERU</code></td>
            <td class="separator-cell hex-cell">#CD853F</td>
            <td class="separator-cell">205</td>
            <td>133</td>
            <td>63</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #BC8F8F"></td>
            <td>Rosy Brown</td>
            <td><code>ROSY_BROWN</code></td>
            <td class="separator-cell hex-cell">#BC8F8F</td>
            <td class="separator-cell">188</td>
            <td>143</td>
            <td>143</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DAA520"></td>
            <td>Goldenrod</td>
            <td><code>GOLDENROD</code></td>
            <td class="separator-cell hex-cell">#DAA520</td>
            <td class="separator-cell">218</td>
            <td>165</td>
            <td>32</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F4A460"></td>
            <td>Sandy Brown</td>
            <td><code>SANDY_BROWN</code></td>
            <td class="separator-cell hex-cell">#F4A460</td>
            <td class="separator-cell">244</td>
            <td>164</td>
            <td>96</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #D2B48C"></td>
            <td>Tan</td>
            <td><code>TAN</code></td>
            <td class="separator-cell hex-cell">#D2B48C</td>
            <td class="separator-cell">210</td>
            <td>180</td>
            <td>140</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DEB887"></td>
            <td>Burlywood</td>
            <td><code>BURLYWOOD</code></td>
            <td class="separator-cell hex-cell">#DEB887</td>
            <td class="separator-cell">222</td>
            <td>184</td>
            <td>135</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F5DEB3"></td>
            <td>Wheat</td>
            <td><code>WHEAT</code></td>
            <td class="separator-cell hex-cell">#F5DEB3</td>
            <td class="separator-cell">245</td>
            <td>222</td>
            <td>179</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFDEAD"></td>
            <td>Navajo White</td>
            <td><code>NAVAJO_WHITE</code></td>
            <td class="separator-cell hex-cell">#FFDEAD</td>
            <td class="separator-cell">255</td>
            <td>222</td>
            <td>173</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFE4C4"></td>
            <td>Bisque</td>
            <td><code>BISQUE</code></td>
            <td class="separator-cell hex-cell">#FFE4C4</td>
            <td class="separator-cell">255</td>
            <td>228</td>
            <td>196</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFEBCD"></td>
            <td>Blanched Almond</td>
            <td><code>BLANCHED_ALMOND</code></td>
            <td class="separator-cell hex-cell">#FFEBCD</td>
            <td class="separator-cell">255</td>
            <td>235</td>
            <td>205</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFF8DC"></td>
            <td>Cornsilk</td>
            <td><code>CORNSILK</code></td>
            <td class="separator-cell hex-cell">#FFF8DC</td>
            <td class="separator-cell">255</td>
            <td>248</td>
            <td>220</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Green colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #006400"></td>
            <td>Dark Green</td>
            <td><code>DARK_GREEN</code></td>
            <td class="separator-cell hex-cell">#006400</td>
            <td class="separator-cell">0</td>
            <td>100</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #008000"></td>
            <td>Green</td>
            <td><code>GREEN</code></td>
            <td class="separator-cell hex-cell">#008000</td>
            <td class="separator-cell">0</td>
            <td>128</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #556B2F"></td>
            <td>Dark Olive Green</td>
            <td><code>DARK_OLIVE_GREEN</code></td>
            <td class="separator-cell hex-cell">#556B2F</td>
            <td class="separator-cell">85</td>
            <td>107</td>
            <td>47</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #228B22"></td>
            <td>Forest Green</td>
            <td><code>FOREST_GREEN</code></td>
            <td class="separator-cell hex-cell">#228B22</td>
            <td class="separator-cell">34</td>
            <td>139</td>
            <td>34</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #2E8B57"></td>
            <td>Sea Green</td>
            <td><code>SEA_GREEN</code></td>
            <td class="separator-cell hex-cell">#2E8B57</td>
            <td class="separator-cell">46</td>
            <td>139</td>
            <td>87</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #808000"></td>
            <td>Olive</td>
            <td><code>OLIVE</code></td>
            <td class="separator-cell hex-cell">#808000</td>
            <td class="separator-cell">128</td>
            <td>128</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #6B8E23"></td>
            <td>Olive Drab</td>
            <td><code>OLIVE_DRAB</code></td>
            <td class="separator-cell hex-cell">#6B8E23</td>
            <td class="separator-cell">107</td>
            <td>142</td>
            <td>35</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #3CB371"></td>
            <td>Medium Sea Green</td>
            <td><code>MEDIUM_SEA_GREEN</code></td>
            <td class="separator-cell hex-cell">#3CB371</td>
            <td class="separator-cell">60</td>
            <td>179</td>
            <td>113</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #32CD32"></td>
            <td>Lime Green</td>
            <td><code>LIME_GREEN</code></td>
            <td class="separator-cell hex-cell">#32CD32</td>
            <td class="separator-cell">50</td>
            <td>205</td>
            <td>50</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00FF00"></td>
            <td>Lime</td>
            <td><code>LIME</code></td>
            <td class="separator-cell hex-cell">#00FF00</td>
            <td class="separator-cell">0</td>
            <td>255</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00FF7F"></td>
            <td>Spring Green</td>
            <td><code>SPRING_GREEN</code></td>
            <td class="separator-cell hex-cell">#00FF7F</td>
            <td class="separator-cell">0</td>
            <td>255</td>
            <td>127</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00FA9A"></td>
            <td>Medium Spring Green</td>
            <td><code>MEDIUM_SPRING_GREEN</code></td>
            <td class="separator-cell hex-cell">#00FA9A</td>
            <td class="separator-cell">0</td>
            <td>250</td>
            <td>154</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #8FBC8F"></td>
            <td>Dark Sea Green</td>
            <td><code>DARK_SEA_GREEN</code></td>
            <td class="separator-cell hex-cell">#8FBC8F</td>
            <td class="separator-cell">143</td>
            <td>188</td>
            <td>143</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #66CDAA"></td>
            <td>Medium Aquamarine</td>
            <td><code>MEDIUM_AQUAMARINE</code></td>
            <td class="separator-cell hex-cell">#66CDAA</td>
            <td class="separator-cell">102</td>
            <td>205</td>
            <td>170</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #9ACD32"></td>
            <td>Yellow Green</td>
            <td><code>YELLOW_GREEN</code></td>
            <td class="separator-cell hex-cell">#9ACD32</td>
            <td class="separator-cell">154</td>
            <td>205</td>
            <td>50</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #7CFC00"></td>
            <td>Lawn Green</td>
            <td><code>LAWN_GREEN</code></td>
            <td class="separator-cell hex-cell">#7CFC00</td>
            <td class="separator-cell">124</td>
            <td>252</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #7FFF00"></td>
            <td>Chartreuse</td>
            <td><code>CHARTREUSE</code></td>
            <td class="separator-cell hex-cell">#7FFF00</td>
            <td class="separator-cell">127</td>
            <td>255</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #90EE90"></td>
            <td>Light Green</td>
            <td><code>LIGHT_GREEN</code></td>
            <td class="separator-cell hex-cell">#90EE90</td>
            <td class="separator-cell">144</td>
            <td>238</td>
            <td>144</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #ADFF2F"></td>
            <td>Green Yellow</td>
            <td><code>GREEN_YELLOW</code></td>
            <td class="separator-cell hex-cell">#ADFF2F</td>
            <td class="separator-cell">173</td>
            <td>255</td>
            <td>47</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #98FB98"></td>
            <td>Pale Green</td>
            <td><code>PALE_GREEN</code></td>
            <td class="separator-cell hex-cell">#98FB98</td>
            <td class="separator-cell">152</td>
            <td>251</td>
            <td>152</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Cyan colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #008080"></td>
            <td>Teal</td>
            <td><code>TEAL</code></td>
            <td class="separator-cell hex-cell">#008080</td>
            <td class="separator-cell">0</td>
            <td>128</td>
            <td>128</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #008B8B"></td>
            <td>Dark Cyan</td>
            <td><code>DARK_CYAN</code></td>
            <td class="separator-cell hex-cell">#008B8B</td>
            <td class="separator-cell">0</td>
            <td>139</td>
            <td>139</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #20B2AA"></td>
            <td>Light Sea Green</td>
            <td><code>LIGHT_SEA_GREEN</code></td>
            <td class="separator-cell hex-cell">#20B2AA</td>
            <td class="separator-cell">32</td>
            <td>178</td>
            <td>170</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #5F9EA0"></td>
            <td>Cadet Blue</td>
            <td><code>CADET_BLUE</code></td>
            <td class="separator-cell hex-cell">#5F9EA0</td>
            <td class="separator-cell">95</td>
            <td>158</td>
            <td>160</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00CED1"></td>
            <td>Dark Turquoise</td>
            <td><code>DARK_TURQUOISE</code></td>
            <td class="separator-cell hex-cell">#00CED1</td>
            <td class="separator-cell">0</td>
            <td>206</td>
            <td>209</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #48D1CC"></td>
            <td>Medium Turquoise</td>
            <td><code>MEDIUM_TURQUOISE</code></td>
            <td class="separator-cell hex-cell">#48D1CC</td>
            <td class="separator-cell">72</td>
            <td>209</td>
            <td>204</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #40E0D0"></td>
            <td>Turquoise</td>
            <td><code>TURQUOISE</code></td>
            <td class="separator-cell hex-cell">#40E0D0</td>
            <td class="separator-cell">64</td>
            <td>224</td>
            <td>208</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00FFFF"></td>
            <td>Aqua</td>
            <td><code>AQUA</code></td>
            <td class="separator-cell hex-cell">#00FFFF</td>
            <td class="separator-cell">0</td>
            <td>255</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00FFFF"></td>
            <td>Cyan</td>
            <td><code>CYAN</code></td>
            <td class="separator-cell hex-cell">#00FFFF</td>
            <td class="separator-cell">0</td>
            <td>255</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #7FFFD4"></td>
            <td>Aquamarine</td>
            <td><code>AQUAMARINE</code></td>
            <td class="separator-cell hex-cell">#7FFFD4</td>
            <td class="separator-cell">127</td>
            <td>255</td>
            <td>212</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #AFEEEE"></td>
            <td>Pale Turquoise</td>
            <td><code>PALE_TURQUOISE</code></td>
            <td class="separator-cell hex-cell">#AFEEEE</td>
            <td class="separator-cell">175</td>
            <td>238</td>
            <td>238</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #E0FFFF"></td>
            <td>Light Cyan</td>
            <td><code>LIGHT_CYAN</code></td>
            <td class="separator-cell hex-cell">#E0FFFF</td>
            <td class="separator-cell">224</td>
            <td>255</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Blue colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #000080"></td>
            <td>Navy</td>
            <td><code>NAVY</code></td>
            <td class="separator-cell hex-cell">#000080</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>128</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00008B"></td>
            <td>Dark Blue</td>
            <td><code>DARK_BLUE</code></td>
            <td class="separator-cell hex-cell">#00008B</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>139</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #0000CD"></td>
            <td>Medium Blue</td>
            <td><code>MEDIUM_BLUE</code></td>
            <td class="separator-cell hex-cell">#0000CD</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>205</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #0000FF"></td>
            <td>Blue</td>
            <td><code>BLUE</code></td>
            <td class="separator-cell hex-cell">#0000FF</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #191970"></td>
            <td>Midnight Blue</td>
            <td><code>MIDNIGHT_BLUE</code></td>
            <td class="separator-cell hex-cell">#191970</td>
            <td class="separator-cell">25</td>
            <td>25</td>
            <td>112</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #4169E1"></td>
            <td>Royal Blue</td>
            <td><code>ROYAL_BLUE</code></td>
            <td class="separator-cell hex-cell">#4169E1</td>
            <td class="separator-cell">65</td>
            <td>105</td>
            <td>225</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #4682B4"></td>
            <td>Steel Blue</td>
            <td><code>STEEL_BLUE</code></td>
            <td class="separator-cell hex-cell">#4682B4</td>
            <td class="separator-cell">70</td>
            <td>130</td>
            <td>180</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #1E90FF"></td>
            <td>Dodger Blue</td>
            <td><code>DODGER_BLUE</code></td>
            <td class="separator-cell hex-cell">#1E90FF</td>
            <td class="separator-cell">30</td>
            <td>144</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #00BFFF"></td>
            <td>Deep Sky Blue</td>
            <td><code>DEEP_SKY_BLUE</code></td>
            <td class="separator-cell hex-cell">#00BFFF</td>
            <td class="separator-cell">0</td>
            <td>191</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #6495ED"></td>
            <td>Cornflower Blue</td>
            <td><code>CORNFLOWER_BLUE</code></td>
            <td class="separator-cell hex-cell">#6495ED</td>
            <td class="separator-cell">100</td>
            <td>149</td>
            <td>237</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #87CEEB"></td>
            <td>Sky Blue</td>
            <td><code>SKY_BLUE</code></td>
            <td class="separator-cell hex-cell">#87CEEB</td>
            <td class="separator-cell">135</td>
            <td>206</td>
            <td>235</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #87CEFA"></td>
            <td>Light Sky Blue</td>
            <td><code>LIGHT_SKY_BLUE</code></td>
            <td class="separator-cell hex-cell">#87CEFA</td>
            <td class="separator-cell">135</td>
            <td>206</td>
            <td>250</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #B0C4DE"></td>
            <td>Light Steel Blue</td>
            <td><code>LIGHT_STEEL_BLUE</code></td>
            <td class="separator-cell hex-cell">#B0C4DE</td>
            <td class="separator-cell">176</td>
            <td>196</td>
            <td>222</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #ADD8E6"></td>
            <td>Light Blue</td>
            <td><code>LIGHT_BLUE</code></td>
            <td class="separator-cell hex-cell">#ADD8E6</td>
            <td class="separator-cell">173</td>
            <td>216</td>
            <td>230</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #B0E0E6"></td>
            <td>Powder Blue</td>
            <td><code>POWDER_BLUE</code></td>
            <td class="separator-cell hex-cell">#B0E0E6</td>
            <td class="separator-cell">176</td>
            <td>224</td>
            <td>230</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Purple, violet, and magenta colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #4B0082"></td>
            <td>Indigo</td>
            <td><code>INDIGO</code></td>
            <td class="separator-cell hex-cell">#4B0082</td>
            <td class="separator-cell">75</td>
            <td>0</td>
            <td>130</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #800080"></td>
            <td>Purple</td>
            <td><code>PURPLE</code></td>
            <td class="separator-cell hex-cell">#800080</td>
            <td class="separator-cell">128</td>
            <td>0</td>
            <td>128</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #8B008B"></td>
            <td>Dark Magenta</td>
            <td><code>DARK_MAGENTA</code></td>
            <td class="separator-cell hex-cell">#8B008B</td>
            <td class="separator-cell">139</td>
            <td>0</td>
            <td>139</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #9400D3"></td>
            <td>Dark Violet</td>
            <td><code>DARK_VIOLET</code></td>
            <td class="separator-cell hex-cell">#9400D3</td>
            <td class="separator-cell">148</td>
            <td>0</td>
            <td>211</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #483D8B"></td>
            <td>Dark Slate Blue</td>
            <td><code>DARK_SLATE_BLUE</code></td>
            <td class="separator-cell hex-cell">#483D8B</td>
            <td class="separator-cell">72</td>
            <td>61</td>
            <td>139</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #8A2BE2"></td>
            <td>Blue Violet</td>
            <td><code>BLUE_VIOLET</code></td>
            <td class="separator-cell hex-cell">#8A2BE2</td>
            <td class="separator-cell">138</td>
            <td>43</td>
            <td>226</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #9932CC"></td>
            <td>Dark Orchid</td>
            <td><code>DARK_ORCHID</code></td>
            <td class="separator-cell hex-cell">#9932CC</td>
            <td class="separator-cell">153</td>
            <td>50</td>
            <td>204</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF00FF"></td>
            <td>Fuchsia</td>
            <td><code>FUCHSIA</code></td>
            <td class="separator-cell hex-cell">#FF00FF</td>
            <td class="separator-cell">255</td>
            <td>0</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FF00FF"></td>
            <td>Magenta</td>
            <td><code>MAGENTA</code></td>
            <td class="separator-cell hex-cell">#FF00FF</td>
            <td class="separator-cell">255</td>
            <td>0</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #6A5ACD"></td>
            <td>Slate Blue</td>
            <td><code>SLATE_BLUE</code></td>
            <td class="separator-cell hex-cell">#6A5ACD</td>
            <td class="separator-cell">106</td>
            <td>90</td>
            <td>205</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #7B68EE"></td>
            <td>Medium Slate Blue</td>
            <td><code>MEDIUM_SLATE_BLUE</code></td>
            <td class="separator-cell hex-cell">#7B68EE</td>
            <td class="separator-cell">123</td>
            <td>104</td>
            <td>238</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #BA55D3"></td>
            <td>Medium Orchid</td>
            <td><code>MEDIUM_ORCHID</code></td>
            <td class="separator-cell hex-cell">#BA55D3</td>
            <td class="separator-cell">186</td>
            <td>85</td>
            <td>211</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #9370DB"></td>
            <td>Medium Purple</td>
            <td><code>MEDIUM_PURPLE</code></td>
            <td class="separator-cell hex-cell">#9370DB</td>
            <td class="separator-cell">147</td>
            <td>112</td>
            <td>219</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DA70D6"></td>
            <td>Orchid</td>
            <td><code>ORCHID</code></td>
            <td class="separator-cell hex-cell">#DA70D6</td>
            <td class="separator-cell">218</td>
            <td>112</td>
            <td>214</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #EE82EE"></td>
            <td>Violet</td>
            <td><code>VIOLET</code></td>
            <td class="separator-cell hex-cell">#EE82EE</td>
            <td class="separator-cell">238</td>
            <td>130</td>
            <td>238</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DDA0DD"></td>
            <td>Plum</td>
            <td><code>PLUM</code></td>
            <td class="separator-cell hex-cell">#DDA0DD</td>
            <td class="separator-cell">221</td>
            <td>160</td>
            <td>221</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #D8BFD8"></td>
            <td>Thistle</td>
            <td><code>THISTLE</code></td>
            <td class="separator-cell hex-cell">#D8BFD8</td>
            <td class="separator-cell">216</td>
            <td>191</td>
            <td>216</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #E6E6FA"></td>
            <td>Lavender</td>
            <td><code>LAVENDER</code></td>
            <td class="separator-cell hex-cell">#E6E6FA</td>
            <td class="separator-cell">230</td>
            <td>230</td>
            <td>250</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #663399"></td>
            <td><a href="https://en.wikipedia.org/wiki/Web_colors#CSS_Color_4">Rebecca Purple</a></td>
            <td><code>REBECCA_PURPLE</code></td>
            <td class="separator-cell hex-cell">#663399</td>
            <td class="separator-cell">102</td>
            <td>51</td>
            <td>153</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>White colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFE4E1"></td>
            <td>Misty Rose</td>
            <td><code>MISTY_ROSE</code></td>
            <td class="separator-cell hex-cell">#FFE4E1</td>
            <td class="separator-cell">255</td>
            <td>228</td>
            <td>225</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FAEBD7"></td>
            <td>Antique White</td>
            <td><code>ANTIQUE_WHITE</code></td>
            <td class="separator-cell hex-cell">#FAEBD7</td>
            <td class="separator-cell">250</td>
            <td>235</td>
            <td>215</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FAF0E6"></td>
            <td>Linen</td>
            <td><code>LINEN</code></td>
            <td class="separator-cell hex-cell">#FAF0E6</td>
            <td class="separator-cell">250</td>
            <td>240</td>
            <td>230</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F5F5DC"></td>
            <td>Beige</td>
            <td><code>BEIGE</code></td>
            <td class="separator-cell hex-cell">#F5F5DC</td>
            <td class="separator-cell">245</td>
            <td>245</td>
            <td>220</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F5F5F5"></td>
            <td>White Smoke</td>
            <td><code>WHITE_SMOKE</code></td>
            <td class="separator-cell hex-cell">#F5F5F5</td>
            <td class="separator-cell">245</td>
            <td>245</td>
            <td>245</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFF0F5"></td>
            <td>Lavender Blush</td>
            <td><code>LAVENDER_BLUSH</code></td>
            <td class="separator-cell hex-cell">#FFF0F5</td>
            <td class="separator-cell">255</td>
            <td>240</td>
            <td>245</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FDF5E6"></td>
            <td>Old Lace</td>
            <td><code>OLD_LACE</code></td>
            <td class="separator-cell hex-cell">#FDF5E6</td>
            <td class="separator-cell">253</td>
            <td>245</td>
            <td>230</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F0F8FF"></td>
            <td>Alice Blue</td>
            <td><code>ALICE_BLUE</code></td>
            <td class="separator-cell hex-cell">#F0F8FF</td>
            <td class="separator-cell">240</td>
            <td>248</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFF5EE"></td>
            <td>Seashell</td>
            <td><code>SEASHELL</code></td>
            <td class="separator-cell hex-cell">#FFF5EE</td>
            <td class="separator-cell">255</td>
            <td>245</td>
            <td>238</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F8F8FF"></td>
            <td>Ghost White</td>
            <td><code>GHOST_WHITE</code></td>
            <td class="separator-cell hex-cell">#F8F8FF</td>
            <td class="separator-cell">248</td>
            <td>248</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F0FFF0"></td>
            <td>Honeydew</td>
            <td><code>HONEYDEW</code></td>
            <td class="separator-cell hex-cell">#F0FFF0</td>
            <td class="separator-cell">240</td>
            <td>255</td>
            <td>240</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFAF0"></td>
            <td>Floral White</td>
            <td><code>FLORAL_WHITE</code></td>
            <td class="separator-cell hex-cell">#FFFAF0</td>
            <td class="separator-cell">255</td>
            <td>250</td>
            <td>240</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F0FFFF"></td>
            <td>Azure</td>
            <td><code>AZURE</code></td>
            <td class="separator-cell hex-cell">#F0FFFF</td>
            <td class="separator-cell">240</td>
            <td>255</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #F5FFFA"></td>
            <td>Mint Cream</td>
            <td><code>MINT_CREAM</code></td>
            <td class="separator-cell hex-cell">#F5FFFA</td>
            <td class="separator-cell">245</td>
            <td>255</td>
            <td>250</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFAFA"></td>
            <td>Snow</td>
            <td><code>SNOW</code></td>
            <td class="separator-cell hex-cell">#FFFAFA</td>
            <td class="separator-cell">255</td>
            <td>250</td>
            <td>250</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFFF0"></td>
            <td>Ivory</td>
            <td><code>IVORY</code></td>
            <td class="separator-cell hex-cell">#FFFFF0</td>
            <td class="separator-cell">255</td>
            <td>255</td>
            <td>240</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #FFFFFF"></td>
            <td>White</td>
            <td><code>WHITE</code></td>
            <td class="separator-cell hex-cell">#FFFFFF</td>
            <td class="separator-cell">255</td>
            <td>255</td>
            <td>255</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em transparent"></td>
            <td colspan="5"><b>Gray and black colors</b></td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #000000"></td>
            <td>Black</td>
            <td><code>BLACK</code></td>
            <td class="separator-cell hex-cell">#000000</td>
            <td class="separator-cell">0</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #2F4F4F"></td>
            <td>Dark Slate Gray</td>
            <td><code>DARK_SLATE_GRAY</code></td>
            <td class="separator-cell hex-cell">#2F4F4F</td>
            <td class="separator-cell">47</td>
            <td>79</td>
            <td>79</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #696969"></td>
            <td>Dim Gray</td>
            <td><code>DIM_GRAY</code></td>
            <td class="separator-cell hex-cell">#696969</td>
            <td class="separator-cell">105</td>
            <td>105</td>
            <td>105</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #708090"></td>
            <td>Slate Gray</td>
            <td><code>SLATE_GRAY</code></td>
            <td class="separator-cell hex-cell">#708090</td>
            <td class="separator-cell">112</td>
            <td>128</td>
            <td>144</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #808080"></td>
            <td>Gray</td>
            <td><code>GREY</code><a href="#Gray_and_Grey">*</a></td>
            <td class="separator-cell hex-cell">#808080</td>
            <td class="separator-cell">128</td>
            <td>128</td>
            <td>128</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #778899"></td>
            <td>Light Slate Gray</td>
            <td><code>LIGHT_SLATE_GRAY</code></td>
            <td class="separator-cell hex-cell">#778899</td>
            <td class="separator-cell">119</td>
            <td>136</td>
            <td>153</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #A9A9A9"></td>
            <td>Dark Gray</td>
            <td><code>DARK_GRAY</code></td>
            <td class="separator-cell hex-cell">#A9A9A9</td>
            <td class="separator-cell">169</td>
            <td>169</td>
            <td>169</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #C0C0C0"></td>
            <td>Silver</td>
            <td><code>SILVER</code></td>
            <td class="separator-cell hex-cell">#C0C0C0</td>
            <td class="separator-cell">192</td>
            <td>192</td>
            <td>192</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #D3D3D3"></td>
            <td>Light Gray</td>
            <td><code>LIGHT_GRAY</code></td>
            <td class="separator-cell hex-cell">#D3D3D3</td>
            <td class="separator-cell">211</td>
            <td>211</td>
            <td>211</td>
        </tr>
        <tr>
            <td style="border-left:solid 4em #DCDCDC"></td>
            <td>Gainsboro</td>
            <td><code>GAINSBORO</code></td>
            <td class="separator-cell hex-cell">#DCDCDC</td>
            <td class="separator-cell">220</td>
            <td>220</td>
            <td>220</td>
        </tr>
    </tbody>
</table>

<span id="footnote">* The <code>GRAY</code> constant is reserved by Processing.js for use in conjunction with the <code>filter</code> function</span>

<h2 id="technical"> Technical</h2>
<h3 id="performance">Performance</h3>
Essentials stores color constants directly as [integers](https://github.com/bhavjitChauhan/Essentials/blob/master/src/core/_colors_.js) as opposed to calling the `color` function as is done when using and function that takes RGBA or HSBA parameters.

<h3 id="gray_and_grey">Gray and Grey</h3>
As with CSS, Color Essentials supports the American and European spelling of gray wherever possible (e.g. `DARK_GRAY` and `DARK_GREY`). Unfortunately, Processing.js uses the `GRAY` constant to represent gray scale for the `filter` function so there is no American counterpart for `GREY`.

