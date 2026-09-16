const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000";

type ApiRequestOptions = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>;
};

function buildUrl(
  path: string,
  query?: Record<string, string | number | boolean | undefined>,
) {
  const url = new URL(path, API_BASE_URL);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url;
}

async function request<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  const { query, ...fetchOptions } = options;

  const response = await fetch(buildUrl(path, query), {
    ...fetchOptions,
    headers: {
      Accept: "application/json",
      ...fetchOptions.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export const apiClient = {
  get<T>(
    path: string,
    query?: Record<string, string | number | boolean | undefined>,
  ) {
    return request<T>(path, {
      method: "GET",
      query,
    });
  },

  post<T>(path: string, body?: unknown) {
    return request<T>(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  },

  put<T>(path: string, body?: unknown) {
    return request<T>(path, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  },

  delete<T>(path: string) {
    return request<T>(path, {
      method: "DELETE",
    });
  },
};
