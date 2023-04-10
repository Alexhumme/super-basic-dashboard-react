import Button from "./components/common/Button";
export default function ErrorPage() {

  return (
    <div className="error-page">
      <div>
            <div className="text-center">
                <h1 className="dark">ERROR</h1>
                <p className="fs-3"> <span className="danger">Opps!</span> Se ha presentado un error.</p>
                <p className="secondary">
                    Puede que la pagina que busques no exista.
                  </p>
                <Button outline cType="light" action={()=>window.history.back()}>Volver</Button>
            </div>
        </div>
    </div>
  );
}