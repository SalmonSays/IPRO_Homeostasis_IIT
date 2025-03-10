import { Inspirations, InspirationLink } from "../components";

export function Team() {
  const links: InspirationLink[] = [
    { year: 2019, teamName: "CU", pageName: "Team" },
    { year: 2019, teamName: "UANL", pageName: "Team" },
    { year: 2019, teamName: "William_and_Mary", pageName: "Team" },
    { year: 2020, teamName: "BOKU-Vienna", pageName: "Team" },
    { year: 2020, teamName: "CAU_China", pageName: "Team_Member" },
    { year: 2020, teamName: "Lethbridge", pageName: "Members" },
  ];

  return (
    <>
      <div className="row">
        <div className="col-8">
          <h2>What should this page contain?</h2>
          <hr />
          <ul>
            <li>
              Include pictures of your teammates, don't forget instructors and
              advisors!
            </li>
            <li>
              You can add a small biography or a few words from each team
              member, to tell us what you like, and what motivated you to
              participate in iGEM.
            </li>
            <li>
              Take team pictures! Show us your school, your lab and little bit
              of your city.
            </li>
            <li>
              Remember that image galleries can help you showcase many pictures
              while saving space.
            </li>
          </ul>
          <div className="bd-callout bd-callout-info">
            <strong>Important:</strong> Your wiki pages will be archived at the
            end of the iGEM season and this content will remain online. Please
            keep this in mind as you post photos and personal information on
            this page.
          </div>
        </div>
        <div className="col-4">
          <h2>Inspirations</h2>
          <hr />
          <ul>
            <li>
              <a href="https://2019.igem.org/Team:CU/Team">2019 CU</a>
            </li>
            <li>
              <a href="https://2019.igem.org/Team:UANL/Team">2019 UANL</a>
            </li>
            <li>
              <a href="https://2019.igem.org/Team:William_and_Mary/Team">
                2019 William and Mary
              </a>
            </li>
            <li>
              <a href="https://2020.igem.org/Team:BOKU-Vienna/Team">
                2020 BOKU Vienna{" "}
              </a>
            </li>
            <li>
              <a href="https://2020.igem.org/Team:CAU_China/Team_Member">
                2020 CAU China
              </a>
            </li>
            <li>
              <a href="https://2020.igem.org/Team:Lethbridge/Members">
                2020 Lethbridge
              </a>
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </>
  );
}
