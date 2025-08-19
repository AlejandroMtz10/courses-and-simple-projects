
<!doctype html>
<html lang="en">
    <head>
        <title>To Do Laravel</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        >
    </head>

    <body>
        <header>
            <!-- place navbar here -->
        </header>
        <main class="container">
            <br>
            <div class="card">
                <div class="card-header d-flex justify-content-center">Tasks</div>
                <div class="card-body">
                    <form action="{{ url('/') }}" method="post">
                        @csrf
                        Task: <br>
                        <input class="form-control" type="text" name="task" id="task">
                        <br>
                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">
                                <i class="bi bi-plus-circle"></i> New task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br>
            <div
                class="table-responsive-sm table-bordered "
            >
                <table
                    class="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Task</th>
                            <th scope="col">Status</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($tasks as $task)
                        <tr>
                            <td> {{ $task -> id }}</td>
                            <td> {{ $task -> task }}</td>
                            <td>
                                @if ($task->status == 0)
                                    Pending
                                @elseif ($task->status == 1)
                                    Done
                                @else
                                    {{ $task->status }} {{-- Show the original value --}}
                                @endif
                            </td>
                            <td class="d-flex justify-content-around">
                                <form action="{{ route('task.destroy', $task -> id) }}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <input class="btn btn-danger" type="submit" value="X">
                                </form>
                                <form action="{{ route('task.update_status', ['id' => $task->id, 'status' => $task->status]) }}" method="post">
                                    @csrf
                                    @method('PUT')
                                    <input class="btn btn-success" type="submit" value="✔">
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            
        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>