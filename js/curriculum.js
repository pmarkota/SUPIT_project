$(document).ready(() => {
  if ($("tbody tr").length == 0) {
    $("thead").hide();
  }
});

$(() => {
  let ects = [];
  let sati = [];
  let predavanja = [];
  let vjezbe = [];
  let ukupno = [ects, sati, predavanja, vjezbe];

  $("#odabirKolegija").autocomplete({
    source: (request, response) => {
      ucitajKolegije().then((data) => {
        const filteredData = data.filter((item) =>
          item.kolegij.includes(request.term)
        );
        response(filteredData.map((item) => item.kolegij));
      });
    },
    select: (e, ui) => {
      ucitajKolegije().then((data) => {
        const kolegij = data.filter((item) => item.kolegij === ui.item.label);
        $("tbody").append(
          `<tr><td>${kolegij[0].kolegij}</td><td>${kolegij[0].ects}</td><td>${kolegij[0].sati}</td><td>${kolegij[0].predavanja}</td><td>${kolegij[0].vjezbe}</td><td>${kolegij[0].tip}</td><td><button type='button' class='btn btn-danger'>Delete</button></td></tr>`
        );

        UpdateUkupnoNakonSelect(ukupno, kolegij);

        $("thead").show();

        $("tfoot").empty();
        $("tfoot").append(
          `<tr><td>Ukupno</td><td>${Sum(ects)}</td><td>${Sum(
            sati
          )}</td><td>${Sum(predavanja)}</td><td>${Sum(vjezbe)}</td></tr>`
        );

        $("#odabirKolegija").val("");
      });
    },
  });

  $("table").on("click", "button", function () {
    const tr = $(this).closest("tr");
    const index = $("tbody tr").index(tr);
    ukupno.forEach((value) => {
      value.splice(index, 1);
    });
    tr.remove();

    if ($("tbody tr").length == 0) {
      $("thead").hide();
      $("tfoot").empty();
    } else {
      $("tfoot").empty();
      $("tfoot").append(
        `<tr><td>Ukupno</td><td>${Sum(ects)}</td><td>${Sum(sati)}</td><td>${Sum(
          predavanja
        )}</td><td>${Sum(vjezbe)}</td></tr>`
      );
    }
  });
});

const ucitajKolegije = async () => {
  const response = await fetch(
    "https://www.fulek.com/data/api/supit/curriculum-list/hr",
    {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data.data;
};

function UpdateUkupnoNakonSelect(ukupno, kolegij) {
  ukupno[0].push(kolegij[0].ects);
  ukupno[1].push(kolegij[0].sati);
  ukupno[2].push(kolegij[0].predavanja);
  ukupno[3].push(kolegij[0].vjezbe);
}

function Sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
