import './PageStyles.css';
import SEO from '../components/SEO';
import './Run2theRoar.css';

export default function Run2theRoar() {
  return (
    <div className="page inner-page">
      <SEO
        title="Run2theRoar — The Philosophy"
        description="Stamped on the back of every Bronco Buckles buckle: Run2theRoar. A reminder to face the day with fearlessness and intention. Read the story behind the motto."
        path="/run2theroar"
      />
      <div className="inner-hero">
        <div className="inner-hero__bg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/66b2a6d245284578268d3713/7e68bf09-c5a2-4400-912a-94c53494f443/unsplash-image-367bjtF6fmw.jpg"
            alt="Run2theRoar"
            style={{ objectPosition: 'center 80%' }}
          />
          <div className="inner-hero__overlay inner-hero__overlay--deep" />
        </div>
        <div className="inner-hero__content inner-hero__content--center container">
          <p className="overline">Stamped on Every Buckle</p>
          <h1 className="display roar-title"><em>Run2theRoar</em></h1>
        </div>
      </div>

      <div className="section container" style={{ paddingTop: '1.5rem' }}>
        <div className="roar-body">

          <div className="roar-opening">
            <p className="roar-hero-sub" style={{ textAlign: 'center' }}>
              A quiet instruction for the man who dresses with purpose.
            </p>
            <p className="body-text roar-lead">
              On the back of each Bronco Buckles buckle is stamped a single phrase: <em>Run2theRoar.</em>
            </p>
            <p className="body-text">
              We share this expression to encourage every Bronco Buckles owner — when he dresses
              for the day's battle — to be fearless, assertive, and intentional when facing the
              roar of the day. The roar of the crowd. The roar of inner fear or doubt.
            </p>
            <p className="body-text">
              By running toward the roar, rather than from the noise, the uncertainty, the doubt,
              or the fear — we confidently assert ourselves to rise above, win the day, and win
              the race. And thus we win the reward of being wholly ourselves and fully engaged
              in life.
            </p>
          </div>

          <div className="roar-parable">
            <div className="roar-parable__label">
              <p className="overline">The Parable</p>
              <div className="divider" />
            </div>
            <div className="roar-parable__text">
              <p className="body-text">
                Consider a hunting pride of lions. The pride quietly surrounds a herd of gazelles.
                On one side are the old lions — whose best hunting days are behind them. On the
                other side, hidden, are the young and ferocious hunters of the pride.
              </p>
              <p className="body-text">
                At the right moment, the old lions roar. The startled gazelles, frightened and
                instinctive, run from the sound — and straight into the young hunters waiting
                on the other side. In their fear, they ran directly into the greater danger.
              </p>
              <p className="body-text">
                If only they had run to the roar, the real threat would have been avoided.
                They could have lived to see another day on the savanna.
              </p>
              <p className="body-text roar-moral">
                A salutary lesson for gazelles. And for all of us.
              </p>
            </div>
          </div>

          <div className="roar-closing">
            <p className="display roar-closing__words"><em>"Run<br />to the<br />Roar."</em></p>
            <div className="roar-closing__text">
              <p className="body-text">
                It is our hope that along with this buckle, the wearer will be encouraged
                to be the best version of himself — to live in truth, and to be a man of action.
              </p>
              <p className="body-text">
                So it is our wish that our buckles quietly whisper and remind men, every time
                they dress, every time they face a challenge, every time the day roars at them:
              </p>
              <p className="roar-whisper"><em>Run2theRoar.</em></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
