import Markdown from "react-markdown";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Header from "./components/Header";

export function App() {
  const loremMarkup = `# In cornua durisque sparsos virgo nato diem

## Nascitur venenis rex bene praebentque o solvere

Lorem markdownum pontum magno ferar feruntur crescere nam serpens elimat inter.
Se poma agrestis, repetens, *marmorea* Gallicus silvas, erat iniere totas
placato fibras crura. Sollicitatque dedit consilii promittit suae, taedasque
magis: ne spectat hastam temerarius Iliacum Ut. Sub agrestes
[capax](http://huc.com/cepi.aspx). Gerentem vindicet his me cessit et abit,
montibus corniger meosque abest.

Quo per cuiquam una **fuerint** saevo. Mea hac **inque colla signa** conpellat
illa Prochytenque mixta, haud, aristis? Harundo qui maculas cervice imagine nec
ingens pendere Morpheus Semeles scrobe? Frugum vulnere simul petisset procorum
opes constitit tenetur Farfarus taurorum pronus in motibus Mycale aptabat in
laniato: *pedis*. Fecit tam quam: quidem pectore tyranni arcus; lucis crura,
turba **tabent Troiana Olympus** Haemoniam.
\`\`\`js
if (hardening_filename_version(log)) {
    down.ddr_wireless = systemE + activex_boolean_script;
    minimize = shell_architecture_script - 5;
    host.cpa_proxy_ftp = read_ethernet;
}
modem_netiquette_key += 78;
display += activex.binCleanMap(state, dv);
snmp_kvm_reality(yahoo_memory_pipeline(node_leopard_editor(rw, -1),
    811964));
\`\`\`
## Caesa advertite orbae porrigitur Fortuna

Tandem erat audax nemus dira contenta parat, patulas hodierna terrarum. Tulisti
varas conpellat *venis*, intumuit, iunctissima, gere milite. Aut ictus fugacia:
si nisi dari iam vinci percussis, ossa. Reclusa natus noxque alta, noli demptis
certamine extulit [dubito ora](http://www.cura.io/circuit) me aurataque flammae
conligit.`;

  return (
    <div className="h-screen bg-gray-900 text-red-500 overflow-hidden">
      {/* Making the text red makes it easy to detect when a text uses the default color since we want every text's color to be customized */}
      <Header />

      <div className="flex size-full">
        <div className="w-80 border-e border-gray-800">
          <Sidebar />
        </div>
        <div className="grow overflow-y-scroll w-full">
          <article className="w-175 mx-auto">
            <Markdown>{loremMarkup}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
}

export default App;
