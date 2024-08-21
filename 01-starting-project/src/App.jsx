import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
              />
            {/* <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            <CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}
              />
              <CoreConcept 
              title={CORE_CONCEPTS[2].title} 
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}
              />
              <CoreConcept 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}
              />

          </ul>

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
