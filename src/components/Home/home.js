import Section1 from '../../extraComponents/Main/section1/section1';
import HelpUkraine from '.../../extraComponents/Main/helpUkraine/helpUkraine';
import SupportAction from '../../extraComponents/Main/SupportAction/support';
import News  from '../../extraComponents/Main/news/news';
import ExtraHelp from '../../extraComponents/Main/extraHelp/extraHelp';

export default function Home() {
  return (
    <>
    <Section1 />
    <HelpUkraine />
    <ExtraHelp />
    <SupportAction />
    <News />
    </>
  );
}
